import React, {forwardRef, useRef, useEffect} from "/-/react@v17.0.1-yH0aYV1FOvoIPeKBbHxg/dist=es2019,mode=imports/optimized/react.js";
import {Chart as Chart$1, LineController, BarController, RadarController, DoughnutController, PolarAreaController, BubbleController, PieController, ScatterController} from "/-/chart.js@v3.8.0-iJlLJHTXZkWhMHLmeLrG/dist=es2019,mode=imports/optimized/chartjs.js";
const defaultDatasetIdKey = "label";
function reforwardRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
function setOptions(chart, nextOptions) {
  chart.options = {
    ...nextOptions
  };
}
function setLabels(currentData, nextLabels) {
  currentData.labels = nextLabels;
}
function setDatasets(currentData, nextDatasets) {
  let datasetIdKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultDatasetIdKey;
  const addedDatasets = [];
  currentData.datasets = nextDatasets.map((nextDataset) => {
    const currentDataset = currentData.datasets.find((dataset) => dataset[datasetIdKey] === nextDataset[datasetIdKey]);
    if (!currentDataset || !nextDataset.data || addedDatasets.includes(currentDataset)) {
      return {
        ...nextDataset
      };
    }
    addedDatasets.push(currentDataset);
    Object.assign(currentDataset, nextDataset);
    return currentDataset;
  });
}
function cloneData(data) {
  let datasetIdKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultDatasetIdKey;
  const nextData = {
    labels: [],
    datasets: []
  };
  setLabels(nextData, data.labels);
  setDatasets(nextData, data.datasets, datasetIdKey);
  return nextData;
}
function getDatasetAtEvent(chart, event) {
  return chart.getElementsAtEventForMode(event.nativeEvent, "dataset", {
    intersect: true
  }, false);
}
function getElementAtEvent(chart, event) {
  return chart.getElementsAtEventForMode(event.nativeEvent, "nearest", {
    intersect: true
  }, false);
}
function getElementsAtEvent(chart, event) {
  return chart.getElementsAtEventForMode(event.nativeEvent, "index", {
    intersect: true
  }, false);
}
function ChartComponent(param, ref) {
  let {height = 150, width = 300, redraw = false, datasetIdKey, type, data, options, plugins = [], fallbackContent, updateMode, ...props} = param;
  const canvasRef = useRef(null);
  const chartRef = useRef();
  const renderChart = () => {
    if (!canvasRef.current)
      return;
    chartRef.current = new Chart$1(canvasRef.current, {
      type,
      data: cloneData(data, datasetIdKey),
      options,
      plugins
    });
    reforwardRef(ref, chartRef.current);
  };
  const destroyChart = () => {
    reforwardRef(ref, null);
    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }
  };
  useEffect(() => {
    if (!redraw && chartRef.current && options) {
      setOptions(chartRef.current, options);
    }
  }, [
    redraw,
    options
  ]);
  useEffect(() => {
    if (!redraw && chartRef.current) {
      setLabels(chartRef.current.config.data, data.labels);
    }
  }, [
    redraw,
    data.labels
  ]);
  useEffect(() => {
    if (!redraw && chartRef.current && data.datasets) {
      setDatasets(chartRef.current.config.data, data.datasets, datasetIdKey);
    }
  }, [
    redraw,
    data.datasets
  ]);
  useEffect(() => {
    if (!chartRef.current)
      return;
    if (redraw) {
      destroyChart();
      setTimeout(renderChart);
    } else {
      chartRef.current.update(updateMode);
    }
  }, [
    redraw,
    options,
    data.labels,
    data.datasets,
    updateMode
  ]);
  useEffect(() => {
    renderChart();
    return () => destroyChart();
  }, []);
  return /* @__PURE__ */ React.createElement("canvas", Object.assign({
    ref: canvasRef,
    role: "img",
    height,
    width
  }, props), fallbackContent);
}
const Chart = /* @__PURE__ */ forwardRef(ChartComponent);
function createTypedChart(type, registerables) {
  Chart$1.register(registerables);
  return /* @__PURE__ */ forwardRef((props, ref) => /* @__PURE__ */ React.createElement(Chart, Object.assign({}, props, {
    ref,
    type
  })));
}
const Line = /* @__PURE__ */ createTypedChart("line", LineController);
const Bar = /* @__PURE__ */ createTypedChart("bar", BarController);
const Radar = /* @__PURE__ */ createTypedChart("radar", RadarController);
const Doughnut = /* @__PURE__ */ createTypedChart("doughnut", DoughnutController);
const PolarArea = /* @__PURE__ */ createTypedChart("polarArea", PolarAreaController);
const Bubble = /* @__PURE__ */ createTypedChart("bubble", BubbleController);
const Pie = /* @__PURE__ */ createTypedChart("pie", PieController);
const Scatter = /* @__PURE__ */ createTypedChart("scatter", ScatterController);
export {Bar, Bubble, Chart, Doughnut, Line, Pie, PolarArea, Radar, Scatter, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent};
export default null;
