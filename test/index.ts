import {expect} from 'chai';
import m from 'mocha';

import RPSBasic from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('SLOC', () => {

  m.it('should count SLOC', async function () {
    let context = new RpsContext;
    let basic = new RPSBasic;

    let result = await basic.sloc(context,{},'ts',"function(){console.log('aa')}\nconsole.log('aaa')");

    expect(result['total']).to.be.equals(2);


  }).timeout(0);




})
