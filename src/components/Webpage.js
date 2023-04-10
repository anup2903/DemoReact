import React  from 'react'
import Nav3 from './Nav3';
import Nav4 from './Nav4';

const Webpage = () => {
    function Run(){
      const html = document.querySelector(".Web #HTML").value;
      const css =
        "<style>" + document.querySelector(".Web #CSS").value + "</style>";
      const js = document.querySelector(".Web #JS").value;
      const output = document.querySelector(".Web #Output");

      output.contentWindow.document.body.innerHTML = html + css;
      output.contentWindow.eval(js);
      
    }
  return (
    <div className="Web bg-stone-600">
      <Nav4/>

      <div className="editors flex justify-around mt-20 ">
        <div className="codehtml flex-col box-border">
          <div>
            <span className="httag ">
              <h2 className='text-purple-700 text-xl text-center'>HTML</h2>
            </span>
          </div>
          <div>
            <textarea
              className="border-4 bg-blue-100"
              id="HTML"
              rows="9"
              cols="60"
              onKeyUp={Run}
            ></textarea>
          </div>
        </div>
        <div className="codecss flex-col box-border">
          <div>
            <span className="csstag ">
              <h2 className='text-purple-700 text-xl text-center'>CSS</h2>
            </span>
          </div>
          <div>
            <textarea className="border-4 bg-blue-100" id="CSS" rows="9" cols="60" onKeyUp={Run}></textarea>
          </div>
        </div>
        <div className="codejs flex-col box-border">
          <div>
            <span className="jstag ">
              <h2 className='text-purple-700 text-xl text-center'>JS</h2>
            </span>
          </div>
          <div>
            <textarea
              className="border-4 bg-blue-100"
              id="JS"
              rows="9"
              cols="60"
              onKeyUp={Run}
            ></textarea>
          </div>
        </div>
      </div>
      <iframe
        id="Output"
        className="border-4 border-dashed mt-12 w-full bg-slate-300 h-[305px]"
      ></iframe>
    </div>
  );
}

export default Webpage