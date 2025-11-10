import { ElNotification } from 'element-plus';

function showPerformance() {
  // 监听页面完全加载（load 事件）
  window.addEventListener('load', () => {
    // 获取导航性能数据
    const navEntries = performance.getEntriesByType('navigation');
    const navTiming = navEntries[0] as PerformanceNavigationTiming;

    if (!navTiming) {
      console.warn('浏览器不支持 PerformanceNavigationTiming');
      return;
    }

    console.log('navTiming', navTiming);

    // 计算核心指标（基于实际字段）
    const calculateMetrics = () => {
      // 页面总加载时间（从导航开始到 load 事件结束）
      const totalLoadTime = (
        (navTiming.loadEventEnd - navTiming.startTime) /
        1000
      ).toFixed(1);

      // 首字节时间（TTFB）
      const ttfb = (
        (navTiming.responseStart - navTiming.requestStart) /
        1000
      ).toFixed(3);

      // DOM 解析完成时间
      const domReadyTime = (
        (navTiming.domInteractive - navTiming.startTime) /
        1000
      ).toFixed(1);

      // 资源传输大小（KB）
      const transferSizeKB = (navTiming.transferSize / 1024).toFixed(1);

      console.log('页面性能指标：');
      console.log(`- 总加载时间：${totalLoadTime}s`);
      console.log(`- 首字节时间（TTFB）：${ttfb}s`);
      console.log(`- DOM 解析完成时间：${domReadyTime}s`);
      console.log(`- 传输大小：${transferSizeKB}KB`);

      // 显示通知
      ElNotification({
        title: '页面加载完成',
        message: `总耗时：${totalLoadTime}s（TTFB：${ttfb}s）`,
        position: 'bottom-right',
        duration: 3000,
      });
    };

    // 处理 loadEventEnd 未就绪的情况（极少数场景）
    if (navTiming.loadEventEnd <= 0) {
      // 延迟 200ms 重试（基于实际字段中 duration 约 2.4s，200ms 足够）
      setTimeout(calculateMetrics, 200);
    } else {
      calculateMetrics();
    }
  });
}

export { showPerformance };
