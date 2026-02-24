import { allRoots } from "flo-poly"

const h = (x, m) => Math.atan(m * x) / Math.atan(m)

const h_gamma = (x, gamma) =>
  ((1 + x) ** gamma - (1 - x) ** gamma) / ((1 + x) ** gamma + (1 - x) ** gamma)

const CostFun = (cbar, a0, ai, av, k) => {
  return (cbar * (ai - a0) ** (k + 1)) / ((k + 1) * av ** (k + 1))
}

const utilityA = (m, cbar, kap, k, av, a, b, ai, a0) => {
  const akappa = (1 - kap) * a + kap * ai
  return (
    h((akappa - b) / (akappa + b), m) -
    (cbar * (ai - a0) ** (k + 1)) / ((k + 1) * av ** (k + 1))
  )
}

const findGroupBrAVecB = (m, cbar, kap, k, av, bVec, a0) => {
  const x = new Array(10 * bVec.length).fill(0)
  const y = new Array(10 * bVec.length).fill(0)
  let count = 0

  for (let i = 0; i < bVec.length; i++) {
    const brList = findGroupBrA(m, cbar, kap, k, av, bVec[i], a0)
    for (let j = 0; j < brList.length; j++) {
      x[count] = brList[j]
      y[count] = bVec[i]
      count++
    }
  }
  return { x, y }
}

const findGroupBrA = (m, cbar, kap, k, av, b, a0) => {
  let roots = rootsAuxA(m, cbar, kap, k, av, b, a0)
  roots = roots.filter(root => root < a0 + av) // only admissible
  roots = roots.filter(root => root > a0)
  roots.push(a0 + av) // append potential corner solutions
  roots.push(a0)

  const tfArray = isGroupBrA(roots, m, cbar, kap, k, av, b, a0)
  return roots.filter((_, index) => tfArray[index])
}

const isGroupBrA = (roots, m, cbar, kap, k, av, b, a0) => {
  const tfArray = new Array(roots.length).fill(false)
  for (let i = 0; i < roots.length; i++) {
    let rootsU = rootsUtilityA(m, cbar, kap, k, av, roots[i], b, a0)
    rootsU = rootsU.filter(root => root > a0) // only positive roots
    rootsU = rootsU.filter(root => root < a0 + av) // only roots in admissible range
    rootsU.push(a0 + av) // append potential corner solutions
    rootsU.push(a0)
    const indexRoot = rootsU.reduce(
      (minIndex, root, index) =>
        Math.abs(root - roots[i]) < Math.abs(rootsU[minIndex] - roots[i])
          ? index
          : minIndex,
      0,
    )
    const indexMax = rootsU.reduce(
      (maxIndex, root, index) =>
        utilityA(m, cbar, kap, k, av, roots[i], b, root, a0) >
        utilityA(m, cbar, kap, k, av, roots[i], b, rootsU[maxIndex], a0)
          ? index
          : maxIndex,
      0,
    )
    if (indexMax === indexRoot) {
      tfArray[i] = true
    }
  }
  return tfArray
}

const rootsAuxA = (m, cbar, kap, k, av, b, a0) => {
  const coeffs = new Array(k + 3).fill(0)

  coeffs[0] = m ** 2 + 1
  coeffs[1] = 2 * a0 * m ** 2 + 2 * a0 - 2 * b * m ** 2 + 2 * b
  coeffs[2] =
    a0 ** 2 * m ** 2 +
    a0 ** 2 -
    2 * a0 * b * m ** 2 +
    2 * a0 * b +
    b ** 2 * m ** 2 +
    b ** 2
  coeffs[k + 2] = (-2 * kap * m * b * av ** (k + 1)) / (Math.atan(m) * cbar)

  return allRoots(coeffs).map(root => root + a0)
}

const rootsUtilityA = (m, cbar, kap, k, av, a, b, a0) => {
  const coeffs = new Array(k + 3).fill(0)

  coeffs[0] = kap ** 2 * m ** 2 + kap ** 2
  coeffs[1] =
    -2 * a * kap ** 2 * m ** 2 -
    2 * a * kap ** 2 +
    2 * a * kap * m ** 2 +
    2 * a * kap +
    2 * a0 * kap ** 2 * m ** 2 +
    2 * a0 * kap ** 2 -
    2 * b * kap * m ** 2 +
    2 * b * kap
  coeffs[2] =
    a ** 2 * kap ** 2 * m ** 2 +
    a ** 2 * kap ** 2 -
    2 * a ** 2 * kap * m ** 2 -
    2 * a ** 2 * kap +
    a ** 2 * m ** 2 +
    a ** 2 -
    2 * a * a0 * kap ** 2 * m ** 2 -
    2 * a * a0 * kap ** 2 +
    2 * a * a0 * kap * m ** 2 +
    2 * a * a0 * kap +
    2 * a * b * kap * m ** 2 -
    2 * a * b * kap -
    2 * a * b * m ** 2 +
    2 * a * b +
    a0 ** 2 * kap ** 2 * m ** 2 +
    a0 ** 2 * kap ** 2 -
    2 * a0 * b * kap * m ** 2 +
    2 * a0 * b * kap +
    b ** 2 * m ** 2 +
    b ** 2
  coeffs[k + 2] = (-2 * kap * m * b * av ** (k + 1)) / (Math.atan(m) * cbar)

  return allRoots(coeffs).map(root => root + a0)
}

export {
  findGroupBrAVecB,
  h,
  CostFun,
  h_gamma,
}
