
function func1 (data) {
    let str = `http://www.mei.com/appapi/silo/eventForH5?categoryId=kids&pageIndex=${data}&timestamp=1568182402925&summary=351105573a310b4af3013e8a35b0d06f&platform_code=H5`
    return str
}

function func2 (data) {
    let str = `http://www.mei.com/appapi/silo/eventForH5?categoryId=cosmetics&pageIndex=${data}&timestamp=1568102501859&summary=9847c87683adfae5c16b38c81d82142b&platform_code=H5`
    return str
}

function func3 (data) {
    let str = `http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=${data}&timestamp=1568192244360&summary=6dfbcc20b6f658cafd744d7df24f426c&platform_code=H5`
    return str
}
var obj = {
    func1,
    func2,
    func3
}

export default obj 
