interface PerformanceNavigationTiming extends PerformanceResourceTiming {
  /** 当前页面的 URL */
  name: string;
  /** 条目类型，固定为 'navigation' */
  entryType: 'navigation';
  /** 计时起点（通常为 0，对应 navigationStart） */
  startTime: number;
  /** 整个导航过程的总耗时（loadEventEnd - startTime） */
  duration: number;
  /** 导航发起类型（如 'navigation'） */
  initiatorType: string;
  /** 资源交付方式（如预加载、缓存等，空字符串表示常规加载） */
  deliveryType: string;
  /** 网络协议（如 'http/1.1'、'h2' 等） */
  nextHopProtocol: string;
  /** 是否为渲染阻塞资源（'blocking' 或 'non-blocking'） */
  renderBlockingStatus: 'blocking' | 'non-blocking';
  /** 服务工作线程开始处理的时间（0 表示未使用） */
  workerStart: number;
  /** 服务工作线程路由评估开始时间（0 表示未使用） */
  workerRouterEvaluationStart: number;
  /** 服务工作线程缓存查询开始时间（0 表示未使用） */
  workerCacheLookupStart: number;
  /** 服务工作线程匹配的资源类型 */
  workerMatchedSourceType: string;
  /** 服务工作线程最终使用的资源类型 */
  workerFinalSourceType: string;
  /** 重定向开始时间（0 表示无重定向） */
  redirectStart: number;
  /** 重定向结束时间（0 表示无重定向） */
  redirectEnd: number;
  /** 浏览器开始准备请求文档的时间（检查缓存前） */
  fetchStart: number;
  /** DNS 解析开始时间 */
  domainLookupStart: number;
  /** DNS 解析结束时间 */
  domainLookupEnd: number;
  /** TCP 连接开始建立的时间 */
  connectStart: number;
  /** HTTPS 握手开始时间（0 表示 HTTP 协议） */
  secureConnectionStart: number;
  /** TCP 连接成功建立的时间 */
  connectEnd: number;
  /** 浏览器开始向服务器发送请求的时间 */
  requestStart: number;
  /** 浏览器收到服务器第一个字节响应的时间（TTFB 起点） */
  responseStart: number;
  /** 首次临时响应开始时间（0 表示无临时响应） */
  firstInterimResponseStart: number;
  /** 最终响应头开始接收的时间 */
  finalResponseHeadersStart: number;
  /** 浏览器接收完所有响应数据的时间 */
  responseEnd: number;
  /** 资源传输总大小（字节，含响应头和响应体） */
  transferSize: number;
  /** 响应体压缩后的大小（字节） */
  encodedBodySize: number;
  /** 响应体解压后的大小（字节） */
  decodedBodySize: number;
  /** HTTP 响应状态码（如 200、404 等） */
  responseStatus: number;
  /** 服务器返回的性能计时信息 */
  serverTiming: PerformanceServerTiming[];
  /** 前一个同域页面 unload 事件开始时间 */
  unloadEventStart: number;
  /** 前一个同域页面 unload 事件结束时间 */
  unloadEventEnd: number;
  /** DOM 树解析完成的时间（document.readyState 为 'interactive'） */
  domInteractive: number;
  /** DOMContentLoaded 事件开始时间 */
  domContentLoadedEventStart: number;
  /** DOMContentLoaded 事件结束时间 */
  domContentLoadedEventEnd: number;
  /** document.readyState 为 'complete' 的时间（所有资源加载完成） */
  domComplete: number;
  /** load 事件开始时间 */
  loadEventStart: number;
  /** load 事件结束时间（页面完全加载的标志） */
  loadEventEnd: number;
  /** 导航类型 */
  type: 'navigate' | 'reload' | 'back_forward' | 'prerender';
  /** 重定向次数 */
  redirectCount: number;
  /** 页面被激活的时间（如从后台切换到前台，0 表示未触发） */
  activationStart: number;
  /** 关键缓存重启相关时间（0 表示未触发） */
  criticalCHRestart: number;
  /** 页面状态未恢复的原因（null 表示正常） */
  notRestoredReasons: null | NotRestoredReasons;
}

/** 服务器计时信息类型（serverTiming 字段的元素类型） */
interface PerformanceServerTiming {
  name: string;
  duration: number;
  description: string;
}

/** 页面状态未恢复的原因（可选，根据浏览器支持扩展） */
interface NotRestoredReasons {
  // 具体字段根据浏览器实现定义，通常包含未恢复的原因详情
  [key: string]: any;
}

export {
  PerformanceNavigationTiming,
  PerformanceServerTiming,
  NotRestoredReasons,
};
