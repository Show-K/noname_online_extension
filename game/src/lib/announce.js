// TODO: 补充一点描述

/**
 * @type {WeakMap<AnnounceSubscriber, EventTarget>}
 */
const vm = new WeakMap();

/**
 *
 */
export class Announce {
	/**
	 * @type {EventTarget}
	 */
	#handler;

	/**
	 * @type {WeakMap<function(any): void, AnnounceSubscriber>}
	 */
	#records;

	constructor() {
		this.#handler = new EventTarget();
		this.#records = new WeakMap();
	}

	/**
	 * 推送任意数据给所有监听了指定事件的订阅者，并返回给定的数据
	 *
	 * 若不存在订阅指定事件的订阅者，则推送的数据将无意义
	 *
	 * @template T
	 * @param {string} name - 要推送事件的名称
	 * @param {T} values - 要推送的数据
	 * @returns {T}
	 */
	publish(name, values) {
		this.#handler.dispatchEvent(new CustomEvent(name, {
			detail: [values, name]
		}));
		return values;
	}

	/**
	 * 订阅给定名字的事件，并返回给定的函数
	 *
	 * 在事件触发时执行给定的函数
	 *
	 * 给定的函数将被存储至当前实例中，用于取消订阅时获取
	 *
	 * @template T
	 * @param {string} name - 要订阅事件的名称
	 * @param {(values: T) => void} method - 事件触发时执行的函数
	 * @returns {(values: T) => void}
	 */
	subscribe(name, method) {
		let subscriber;
		if (this.#records.has(method))
			subscriber = this.#records.get(method);
		else {
			subscriber = new AnnounceSubscriber(method, this.#handler);
			this.#records.set(method, subscriber);
		}
		subscriber.subscribe(name);
		return method;
	}

	/**
	 * 取消指定事件某一个函数的订阅，并返回该函数
	 *
	 * 给定的函数将不再于事件触发时执行，其余同事件需触发的函数不受限制
	 *
	 * @template T
	 * @param {string} name - 要取消订阅事件的名称
	 * @param {(values: T) => void} method - 订阅指定事件的函数
	 * @returns {(values: T) => void}
	 */
	unsubscribe(name, method) {
		if (this.#records.has(method)) {
			const subscriber = this.#records.get(method);
			subscriber.unsubscribe(name);
			if (subscriber.isEmpty)
				this.#records.delete(method);
		}
		return method;
	}
}

/**
 * @template T
 */
class AnnounceSubscriber {
	/**
	 * @type {function(CustomEvent): void}
	 */
	#content;

	/**
	 * @type {string[]}
	 */
	#listening

	/**
	 *
	 * @param {function(T, string): void} content
	 * @param {EventTarget} target
	 */
	constructor(content, target) {
		this.#content = function (event) {
			content(event.detail[0], event.detail[1]);
		}
		this.#listening = [];

		vm.set(this, target);
	}

	get isEmpty() {
		return this.#listening.length <= 0;
	}

	/**
	 * @param {string} name
	 */
	subscribe(name) {
		vm.get(this).addEventListener(name, this.#content);
		this.#listening.add(name);
	}

	unsubscribe() {
		vm.get(this).removeEventListener(name, this.#content);
		this.#listening.remove(name);
	}
}
