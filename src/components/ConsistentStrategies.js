import Plot from "./LoadablePlot.js"
import React, { useState, useEffect } from "react"
import { findGroupBrAVecB, h, CostFun } from "./Utils.js"
import Latex from "react-latex-next"
import "katex/dist/katex.min.css"

const ConsistentStrategies = () => {
  const [m, setM] = useState(1)
  const [theA, setTheA] = useState(1)
  const [theB, setTheB] = useState(1)
  const [rho, setRho] = useState(2)
  const [k, setK] = useState(1)
  const [kap, setKap] = useState(0.5)
  const [a0, setA0] = useState(1)
  const [av, setAv] = useState(1)
  const [b0, setB0] = useState(0.6)
  const [bv, setBv] = useState(0.6)
  const [data, setData] = useState({ x: [], y: [] })
  const [data2, setData2] = useState({ x: [], y: [] })
  const [abline, setAbline] = useState({ x: [], y: [] })
  const [isHorizontal, setIsHorizontal] = useState(typeof window === 'undefined' ? true : window.innerWidth > window.innerHeight)
  const [benefit, setBenefit] = useState({ x: [], y: [] })
  const [cost, setCost] = useState({ x: [], y: [] })
  const [CDF, setCDF] = useState({ x: [], y: [] })

  useEffect(() => {
    const makeabline = () => {
      const x = [Math.max(a0, b0), Math.min(a0 + av, b0 + bv)]

      setAbline({ x, y: x })
    }
    makeabline()
  }, [a0, av, b0, bv])

  useEffect(() => {
    const calculateData = useRefined => {
      const highres = 3000
      const Bvec = Array.from(
        { length: useRefined ? highres : 200 },
        (_, i) => b0 + (i * bv) / (useRefined ? highres - 1 : 199),
      )
      const Avec = Array.from(
        { length: useRefined ? highres : 200 },
        (_, i) => a0 + (i * av) / (useRefined ? highres - 1 : 199),
      )

      const newData = findGroupBrAVecB(m, theA, kap, k, av, Bvec, a0)
      const newData2 = findGroupBrAVecB(m, theB / rho, kap, k, bv, Avec, b0)
      newData.x = newData.x.slice(
        0,
        newData.x.findIndex((val, idx) => val === 0 && newData.y[idx] === 0),
      )
      newData.y = newData.y.slice(
        0,
        newData.y.findIndex((val, idx) => val === 0 && newData.x[idx] === 0),
      )
      newData2.x = newData2.x.slice(
        0,
        newData2.x.findIndex((val, idx) => val === 0 && newData2.y[idx] === 0),
      )
      newData2.y = newData2.y.slice(
        0,
        newData2.y.findIndex((val, idx) => val === 0 && newData2.x[idx] === 0),
      )

      setData(newData)
      setData2(newData2)
    }

    calculateData(false)

    const timeoutId = setTimeout(() => {
      calculateData(true)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [m, theA, kap, a0, av, b0, bv, theB, rho, k])

  const handleSliderChange = setter => e => {
    setter(parseFloat(e.target.value))
  }

  useEffect(() => {
    const calculateBenefit = () => {
      const alphavec = Array.from({ length: 200 }, (_, i) => -1 + (i * 2) / 199)
      const benefit = alphavec.map(alpha => h(alpha, m))

      setBenefit({ x: alphavec, y: benefit })
    }
    calculateBenefit()
  }, [m])

  useEffect(() => {
    const calculateCostFunction = () => {
      const Avec = Array.from({ length: 200 }, (_, i) => a0 + (i * av) / 199)

      const cost = Avec.map(a => CostFun(theA, a0, a, av, k))

      setCost({ x: Avec, y: cost })
    }

    calculateCostFunction()
  }, [a0, av, theA, k])

  useEffect(() => {
    const calculateCostCDF = () => {
      const xVec = Array.from({ length: 200 }, (_, i) => (i * theA) / 199)

      const cdf = xVec.map(x => Math.pow(x / theA, 1 / k))

      setCDF({ x: xVec, y: cdf })
    }
    calculateCostCDF()
  }, [theA, k])

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') {
        setIsHorizontal(true);
      }
      else {
        setIsHorizontal(window.innerWidth > window.innerHeight)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const containerStyle = {
    display: "flex",
    flexDirection: isHorizontal ? "row" : "column",
    height: "100%",
    width: "100%",
    padding: "0px",
  }

  const verticalStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "0px",
  }

  const threePlots = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: isHorizontal ? "calc(var(--size-content) * 0.35)" : "35vw",
    padding: "0px",
  }

  const plotTitles = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    padding: "0px",
  }

  const thirdStyle = {
    display: "flex",
    flexDirection: "column",
    width: "33%",
    height: "100%",
    padding: "0px",
  }

  const plotStyle = {
    display: "flex",
    flexDirection: "row",
    width: isHorizontal ? "70%" : "100%",
    height: isHorizontal ? "100%" : "70%",
    padding: "0px",
  }

  const plotTitle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: "0px",
  }

  const controlsStyle = {
    display: "flex",
    flexDirection: "column",
    width: isHorizontal ? "30%" : "100%",
    height: isHorizontal ? "100%" : "auto",
    padding: "0px",
    boxSizing: "border-box",
  }

  const plotlyLayout = {
    margin: { t: 10, r: 10, b: 20, l: 20 },
  }

  const plotlyLayout2 = {
    legend: isHorizontal
      ? { x: 1, y: 1, xanchor: "left" }
      : { x: 1, xanchor: "right", y: 1 },
      xaxis: {
        title: {
          text: "a",
          font: {
            size: 12,
            color: "black",
          },
        },
        automargin: true,
      },
      yaxis: {
        title: {
          text: "b",
          font: {
            size: 12,
            color: "black",
          },
        },
        automargin: true,
      },
    margin: { t: 10, r: 10, b: 20, l: 20 },
  }

  const traces = [
    {
      x: data.x,
      y: data.y,
      type: "scatter",
      name: "A-consistent strategies",
      mode: "markers",
      marker: { size: 1, color: "#440154" },
      showlegend: false,
      legendgroup: "Polynomial",
    },
    {
      x: data2.y,
      y: data2.x,
      type: "scatter",
      name: "B-consistent strategies",
      mode: "markers",
      marker: { size: 1, color: "#5ec962" },
      showlegend: false,
      legendgroup: "Polynomial 2",
    },
    {
      x: [data2.y[0]],
      y: [data2.x[0]],
      type: "scatter",
      name: "B-consistent",
      mode: "lines",
      marker: { size: 1, color: "#5ec962" },
      showlegend: true,
      legendgroup: "Polynomial 2",
    },
    {
      x: [data.x[0]],
      y: [data.y[0]],
      type: "scatter",
      name: "A-consistent",
      mode: "lines",
      marker: { size: 1, color: "#440154" },
      showlegend: true,
      legendgroup: "Polynomial",
    },
    {
      x: abline.x,
      y: abline.y,
      type: "scatter",
      name: "a=b",
      mode: "lines",
      line: { color: "black", dash: "dash", width: 1 },
    },
  ]

  const benefitTrace = [
    {
      x: benefit.x,
      y: benefit.y,
      type: "scatter",
      name: "Benefit function",
      mode: "lines",
      marker: { size: 1, color: "black" },
      showlegend: false,
    },
  ]

  const costTrace = [
    {
      x: cost.x,
      y: cost.y,
      type: "scatter",
      name: "Cost function",
      mode: "lines",
      marker: { size: 1, color: "black" },
      showlegend: false,
    },
  ]

  const CDFTrace = [
    {
      x: CDF.x,
      y: CDF.y,
      type: "scatter",
      name: "CDF",
      mode: "lines",
      marker: { size: 1, color: "black" },
      showlegend: false,
    },
  ]

  return (
    <div style={verticalStyle}>
      <div style={containerStyle}>
        <div
          style={plotStyle}
          min-width="0"
          min-height="0"
          max-width="100%"
          max-height="100%"
        >
          <Plot
            data={traces}
            layout={plotlyLayout2}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={controlsStyle}>
          <div>
            <h3>Adjust Parameters: </h3>
            <div>
              <label htmlFor="m">
                <Latex>$m$</Latex>:{" "}
              </label>
              <input
                type="range"
                id="m"
                min="0.01"
                max="100"
                step="0.01"
                value={m}
                onChange={handleSliderChange(setM)}
              />
              <span>{m.toFixed(2)}</span>
            </div>
            <div>
              <label htmlFor="k">
                <Latex>$k$</Latex>:{" "}
              </label>
              <input
                type="range"
                id="k"
                min="1"
                max="10"
                step="1"
                value={k}
                onChange={handleSliderChange(setK)}
              />
              <span>{k.toFixed(0)}</span>
            </div>
            <div>
              <label htmlFor="kap">
                <Latex>$\kappa$</Latex>:{" "}
              </label>
              <input
                type="range"
                id="kap"
                min="0.01"
                max="1"
                step="0.01"
                value={kap}
                onChange={handleSliderChange(setKap)}
              />
              <span>{kap.toFixed(2)}</span>
            </div>
            <div>
              <label htmlFor="rho">
                <Latex>$\rho$</Latex>:{" "}
              </label>
              <input
                type="range"
                id="rho"
                min="0.01"
                max="10"
                step="0.01"
                value={rho}
                onChange={handleSliderChange(setRho)}
              />
              <span>{rho.toFixed(2)}</span>
            </div>
            <div>
              <label htmlFor="theA">
                <Latex>$\theta_A$</Latex>:{" "}
              </label>
              <input
                type="range"
                id="theA"
                min="0.01"
                max="10"
                step="0.01"
                value={theA}
                onChange={handleSliderChange(setTheA)}
              />
              <span>{theA.toFixed(2)}</span>
            </div>
            <div>
              <label htmlFor="theB">
                <Latex>$\theta_B$</Latex>:{" "}
              </label>
              <input
                type="range"
                id="theB"
                min="0.01"
                max="10"
                step="0.01"
                value={theB}
                onChange={handleSliderChange(setTheB)}
              />
              <span>{theB.toFixed(2)}</span>
            </div>
            <div>
              <label htmlFor="a0">
                <Latex>$a_0$</Latex>:{" "}
              </label>
              <input
                type="range"
                id="a0"
                min="0.01"
                max="2.0"
                step="0.01"
                value={a0}
                onChange={handleSliderChange(setA0)}
              />
              <span>{a0.toFixed(2)}</span>
            </div>
            <div>
              <label htmlFor="av">
                <Latex>$a_v$</Latex>:{" "}
              </label>
              <input
                type="range"
                id="av"
                min="0.1"
                max="10"
                step="0.01"
                value={av}
                onChange={handleSliderChange(setAv)}
              />
              <span>{av.toFixed(2)}</span>
            </div>
            <div>
              <label htmlFor="b0">
                <Latex>$b_0$</Latex>:{" "}
              </label>
              <input
                type="range"
                id="b0"
                min="0.01"
                max="2.0"
                step="0.01"
                value={b0}
                onChange={handleSliderChange(setB0)}
              />
              <span>{b0.toFixed(2)}</span>
            </div>
            <div>
              <label htmlFor="bv">
                <Latex>$b_v$</Latex>:{" "}
              </label>
              <input
                type="range"
                id="bv"
                min="0.1"
                max="10"
                step="0.01"
                value={bv}
                onChange={handleSliderChange(setBv)}
              />
              <span>{bv.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Explanations</h2>
        <p>
          <Latex>{`We plot $A$-consistent and $B$-consistent strategies for a range of parameters. The cost is described by the cumulative distribution functions \\[ F_A(x) = \\left(\\frac{x}{\\theta_A}\\right)^{1/k}\\quad \\text{ and }\\quad  F_B(x) = \\left(\\frac{x}{\\theta_B}\\right)^{1/k}. \\] Especially, for $k =1$, the cost is uniformly distributed on $[0, \\theta_A]$ and $[0,\\theta_B]$, respectively.`}</Latex>
        </p>
      </div>
      <div style={plotTitles}>
        <div style={plotTitle}>
          <h3>
            Benefit Function <Latex>$h(\alpha)$</Latex>
          </h3>
        </div>
        <div style={plotTitle}>
          <h3>
            Cost function <Latex>$C_A(a^i)$</Latex>{" "}
          </h3>
        </div>
        <div style={plotTitle}>
          <h3>
            CDF <Latex>$F_A(x)$</Latex>
          </h3>
        </div>
      </div>
      <div style={threePlots}>
        <div
          style={thirdStyle}
          min-width="0"
          min-height="0"
          max-width="100%"
          max-height="100%"
        >
          <Plot
            data={benefitTrace}
            layout={plotlyLayout}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={thirdStyle}
          min-width="0"
          min-height="0"
          max-width="100%"
          max-height="100%"
        >
          <Plot
            data={costTrace}
            layout={plotlyLayout}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={thirdStyle}
          min-width="0"
          min-height="0"
          max-width="100%"
          max-height="100%"
        >
          <Plot
            data={CDFTrace}
            layout={plotlyLayout}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  )
}

export default ConsistentStrategies
