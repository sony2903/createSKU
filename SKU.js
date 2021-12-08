let variant = [{variant_name: 'celana', code: '01'}, {variant_name: 'baju', code: '02'}]
let colours = [{colour_name: 'red', code: '01'}, {colour_name: 'blue', code: '02'}, {colour_name: 'black', code: '03'}]
let size = [{size_name: 'S', code: '01'}, {size_name: 'M', code: '02'}, {size_name: 'L', code: '03'},
{size_name: 'XL', code: '04'}, {size_name: 'XXL', code: '05'}]

function createSKU(v, c, s){
    let result = []
    let temp = ''
    
    for(let h=0; h < v.length; h++){
        for(let i=0; i<c.length; i++){
            for(let j=0; j<s.length; j++){
                //name
                temp = v[h].variant_name + ' ' + c[i].colour_name + ' ' +s[j].size_name
                //sku
                temp += ' = ' + v[h].code + c[i].code +s[j].code
                // console.log(temp)
                result.push(temp)
                temp = ''
            }
        }
    }
    
    
    return console.log(result)
}

createSKU(variant, colours, size)