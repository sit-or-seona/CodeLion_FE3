// import React, { useState } from 'react';

// function Two() {
//     const [value, setValue] = useState('');
//     function onChange(e) {
//         setValue(e.target.value);
//     }
//     return (
//         <>
//             <input type="text" onChange={onChange}/>
//             <div>
//                 {value}가 강해졌다 돌격해!
//             </div>
//         </>
//     )
// }

// export default Two;

import React from 'react';
import useSeona from '../Hook/useSeona';

function SomethingComponent() {
    const [value, onChange] = useSeona("");
    return (
        <>
            <input type="text" onChange={onChange}/>
            <div>
                {value}가 강해졌다 돌격해!
            </div>
        </>
    )
}
export default SomethingComponent;