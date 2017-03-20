import {transform} from 'babel-core';
import getStdin from 'get-stdin';
import recast from 'recast';

const options = {
  plugins: ['babel-plugin-meaningful-logs'],
  parserOpts: {
    parser: recast.parse
  },
  generatorOpts: {
    generator: recast.print
  },
};

getStdin()
.then((str) => {
  const out = transform(str, options);
  console.log(out.code);
});
