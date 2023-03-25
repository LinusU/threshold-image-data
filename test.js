/* eslint-env mocha */

'use strict'

const fs = require('fs')
const path = require('path')
const assert = require('assert')

const lodepng = require('lodepng')

const thresholdImageData = require('./')

function loadFixture (name) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'fixtures', `${name}.png`), (err, data) => {
      if (err) return reject(err)

      resolve(lodepng.decode(data))
    })
  })
}

function addTestCase (name, value) {
  it(`should threshold ${name} by ${value}%`, () => {
    return Promise.all([
      loadFixture(name),
      loadFixture(`${name}-${value}`)
    ]).then((images) => {
      thresholdImageData(images[0], value / 100)

      assert.strictEqual(images[0].width, images[1].width)
      assert.strictEqual(images[0].height, images[1].height)

      assert.strictEqual(images[0].data.length, images[1].data.length, 'The thresholded data should match the target data (length)')
      assert.deepStrictEqual(images[0].data, images[1].data, 'The thresholded data should match the target data (bytes)')
    })
  })
}

describe('Threshold Image Data', () => {
  addTestCase('sample1', 11)
  addTestCase('sample1', 50)
  addTestCase('sample2', 50)
  addTestCase('sample2', 90)
})
