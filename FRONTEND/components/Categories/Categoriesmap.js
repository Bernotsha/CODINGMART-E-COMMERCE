import React from 'react'

function Categoriesmap({values}){
        return(
            <div class="col-lg-6 col-md-6 col-sm-6 p-0">
            <div className={values.image}>
                <div class="categories__text">
                    <h4>{values.htext}</h4>
                    <p>{values.ptext}</p>
                    <a href="#" onClick={()=>values.onclick()}>Shop now</a>
                </div>
            </div>
        </div>
        )
    
}
export default Categoriesmap