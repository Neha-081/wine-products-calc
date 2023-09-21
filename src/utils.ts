/**
 * Calculate the mean (average) of a specific element in an array of objects
 * grouped by a common key (Alcohol).
 *
 * @param {any[]} arr - The array of objects to calculate the mean for.
 * @param {string} element - The name of the element within each object to calculate the mean for.
 * @returns {Array<{ Alcohol: string, element: number }>} - An array of objects representing the mean
 * values for each unique Alcohol value.
 */
export function calculateMean(
  arr: any[],
  element: string
): Array<{ Alcohol: string; element: number }> {
  // Initialize objects to store sums and counts for each unique Alcohol value
  const sums: { [key: string]: number } = {};
  const counts: { [key: string]: number } = {};

  // Initialize an array to store the results (mean values)
  const results: { Alcohol: string; element: number }[] = [];

  for (const item of arr) {
    const Alcohol = item.Alcohol;

    // If Alcohol is not in sums, initialize it with 0 sum and count
    if (!(Alcohol in sums)) {
      sums[Alcohol] = 0;
      counts[Alcohol] = 0;
    }

    // Calculate the sum based on the provided element
    sums[Alcohol] += +item[element];

    // Increment the count for this Alcohol value
    counts[Alcohol]++;
  }

  // Iterate through the unique Alcohol values and calculate the mean
  for (const Alcohol in sums) {
    results.push({
      Alcohol,
      element: sums[Alcohol] / counts[Alcohol],
    });
  }

  // Return the array of mean values
  return results;
}

export function calculateGammaMean(
  arr: any[]
): Array<{ Alcohol: string; element: number }> {
  const sums: { [key: string]: number } = {};
  const counts: { [key: string]: number } = {};

  const results: { Alcohol: string; element: number }[] = [];

  for (const item of arr) {
    const Alcohol = item.Alcohol;
    if (!(Alcohol in sums)) {
      sums[Alcohol] = 0;
      counts[Alcohol] = 0;
    }

    const Gamma = (item.Ash * item.Hue) / item.Magnesium;
    sums[Alcohol] += Gamma;
    counts[Alcohol]++;
  }

  for (const Alcohol in sums) {
    results.push({
      Alcohol,
      element: sums[Alcohol] / counts[Alcohol],
    });
  }
  return results;
}

/**
 * Calculate the median value of a specific element in an array of objects
 * grouped by a common key (Alcohol).
 *
 * @param {any[]} data - The array of objects to calculate the median for.
 * @param {string} element - The name of the element within each object to calculate the median for.
 * @returns {Array<{ Alcohol: string, element: number }>} - An array of objects representing the median
 * values for each unique Alcohol value.
 */
export function calculateMedian(
  data: any[],
  element: string
): Array<{ Alcohol: string; element: number }> {
  // Initialize an array to store the results (median values)
  const result: { Alcohol: string; element: number }[] = [];

  // Initialize objects to store arrays of values for each unique Alcohol value
  const elementsMap: { [key: string]: number[] } = {};

  // Iterate through the input data and populate elementsMap
  data.forEach((item) => {
    const Alcohol = item.Alcohol;
    const value = item[element];

    // Initialize arrays for each unique Alcohol value if they don't exist
    elementsMap[Alcohol] = elementsMap[Alcohol] || [];
    elementsMap[Alcohol].push(value);
  });

  // Calculate the median for each unique Alcohol value
  const calcMedian = (list: number[], alc: string) => {
    // Sort the list in ascending order
    const sortedList = [...list].sort((a, b) => a - b);

    // Calculate the median value
    result.push({
      Alcohol: alc,
      element: sortedList[Math.floor(sortedList.length / 2)],
    });
  };

  // Iterate through the unique Alcohol values and calculate the median
  for (const Alcohol in elementsMap) {
    calcMedian(elementsMap[Alcohol], Alcohol);
  }

  // Return the array of median values
  return result;
}

export function calculateGammaMedian(
  data: any[]
): Array<{ Alcohol: string; element: number }> {
  const result: { Alcohol: string; element: number }[] = [];

  const gammaMap: { [key: string]: number[] } = {};

  data.forEach((item) => {
    const Alcohol = item.Alcohol;

    gammaMap[Alcohol] = gammaMap[Alcohol] || [];
    gammaMap[Alcohol].push((item.Ash * item.Hue) / item.Magnesium);
  });

  const calcMedian = (list: number[], alc: string) => {
    const sortedList = [...list].sort((a, b) => a - b);
    result.push({
      Alcohol: alc,
      element: sortedList[Math.floor(sortedList.length / 2)],
    });
  };

  for (const Alcohol in gammaMap) {
    calcMedian(gammaMap[Alcohol], Alcohol);
  }

  return result;
}

/**
 * Calculate the mode (most frequent value) of a specific element in an array of objects
 * grouped by a common key (Alcohol).
 *
 * @param {any[]} data - The array of objects to calculate the mode for.
 * @param {string} element - The name of the element within each object to calculate the mode for.
 * @returns {Array<{ Alcohol: string, element: number }>} - An array of objects representing the mode
 * values for each unique Alcohol value.
 */
export function calculateMode(
  data: any[],
  element: string
): Array<{ Alcohol: string; element: number }> {
  // Initialize an array to store the results (mode values)
  const result: { Alcohol: string; element: number }[] = [];

  // Initialize objects to store arrays of values for each unique Alcohol value
  const elementsMap: { [key: string]: number[] } = {};

  // Iterate through the input data and populate elementsMap
  data.forEach((item) => {
    const Alcohol = item.Alcohol;
    const value = item[element];

    // Initialize arrays for each unique Alcohol value if they don't exist
    elementsMap[Alcohol] = elementsMap[Alcohol] || [];
    elementsMap[Alcohol].push(value);
  });

  // Calculate the mode for each unique Alcohol value
  const calculateMode = (list: number[], alc: string) => {
    // Initialize an object to count occurrences of each value
    const counts: { [key: number]: number } = {};
    let maxCount = 0;
    let mode: number | null = null;

    // Iterate through the list and count occurrences of each value
    for (const num of list) {
      counts[num] = (counts[num] || 0) + 1;

      // Update the mode if a value has a higher count
      if (counts[num] > maxCount) {
        maxCount = counts[num];
        mode = num;
      }
    }

    // Push the mode value to the result array if it exists
    if (mode !== null) {
      result.push({
        Alcohol: alc,
        element: mode,
      });
    }
  };

  // Iterate through the unique Alcohol values and calculate the mode
  for (const Alcohol in elementsMap) {
    calculateMode(elementsMap[Alcohol], Alcohol);
  }

  // Return the array of mode values
  return result;
}

export function calculateGammaMode(
  data: any[]
): Array<{ Alcohol: string; element: number }> {
  const result: { Alcohol: string; element: number }[] = [];
  const gammaMap: { [key: string]: number[] } = {};

  data.forEach((item) => {
    const Alcohol = item.Alcohol;

    gammaMap[Alcohol] = gammaMap[Alcohol] || [];
    gammaMap[Alcohol].push((item.Ash * item.Hue) / item.Magnesium);
  });
  const calculateMode = (list: number[], alc: string) => {
    const counts: { [key: number]: number } = {};
    let maxCount = 0;
    let mode: number | null = null;

    for (const num of list) {
      counts[num] = (counts[num] || 0) + 1;

      if (counts[num] > maxCount) {
        maxCount = counts[num];
        mode = num;
      }
    }

    if (mode !== null) {
      result.push({
        Alcohol: alc,
        element: mode,
      });
    }
  };
  for (const Alcohol in gammaMap) {
    calculateMode(gammaMap[Alcohol], Alcohol);
  }
  return result;
}

//example for calculating mean by using reducer
export function calculateMeanReducer(arr: any[], element: string) {
  // Initialize the reducer's state object
  const initialState = {
    sums: {},
    counts: {},
    results: [],
  };

  // Define the reducer function
  const reducer = (state: any, item: any) => {
    const { sums, counts } = state;
    const Alcohol = item.Alcohol;

    // If Alcohol is not in sums, initialize it with 0 sum and count
    if (!(Alcohol in sums)) {
      sums[Alcohol] = 0;
      counts[Alcohol] = 0;
    }

    sums[Alcohol] += +item[element];

    counts[Alcohol]++;
    return { ...state, sums, counts };
  };

  // Use the reducer to process the array and calculate the mean
  const finalState = arr.reduce(reducer, initialState);

  const results = Object.keys(finalState.sums).map((Alcohol) => ({
    Alcohol,
    element: finalState.sums[Alcohol] / finalState.counts[Alcohol],
  }));

  return results;
}
