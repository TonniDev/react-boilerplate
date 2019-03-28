const jasmine = require('jasmine');
const expect = require('expect');

export const {describe} = jasmine.currentEnv_;
export const {it} = jasmine.currentEnv_;
export const {beforeEach} = jasmine.currentEnv_;
export const {afterEach} = jasmine.currentEnv_;
export const {xit} = jasmine.currentEnv_;
export const {xdescribe} = jasmine.currentEnv_;
export const {fit} = jasmine.currentEnv_;
export const after = () => {};
export const before = () => {};

export const snapshot = (name, story) => {
  it(name, () => {
    const renderer = require('react-test-renderer');
    const tree = renderer.create(story).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

export const storiesOf = function storiesOf() {
  const api = {};
  let story;
  api.add = (name, func) => {
    story = func();
    snapshot(name, story);
    return api;
  };
  api.addWithInfo = (name, func) => {
    story = func();
    snapshot(name, story);
    return api;
  };
  return api;
};
export const action = () => {};

export const linkTo = () => {};

export const specs = (spec) => {
  spec();
};
