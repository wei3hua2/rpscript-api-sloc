import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import sloc from 'sloc';

/** SLOC
 * @namespace SLOC
 * 
 * @description
 * Help you count SLOC
 * 
 * @example
 * rps install sloc
 * 
 * @see {@link https://www.npmjs.com/package/sloc|SLOC}
 * 
*/
@RpsModule("sloc")
export default class RPSSloc {

/**
 * @function sloc
 * @memberof SLOC
 * @example
 * ;print 'Hello' again
 * sloc $RESULT
 * @param {string} code source code to be counted
 * @param {string} fileExtension file extension of the supported languages. ts for typescript etc.
 * @returns {*} The result metrics
 * @summary Compute the SLOC
 * 
 * @see {@link https://www.npmjs.com/package/sloc}
 * 
*/
  @rpsAction({verbName:'sloc'})
  async sloc(ctx:RpsContext,opts:Object, code:string,language:string) : Promise<Object>{
    return sloc(code,language);
  }


}
