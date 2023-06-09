/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

// function isArray(a) checks(Array.isArray(a));

const isArrayImpl = Array.isArray;

// eslint-disable-next-line no-redeclare
function isArray(a) {
  return isArrayImpl(a);
}

export default isArray;
