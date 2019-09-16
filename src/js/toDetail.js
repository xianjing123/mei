import Vue from 'vue'

var detail = Vue.directive('detail',{
    inserted (el,bind,vnode) {
        el.addEventListener('click',()=>{
            location.hash=`#/detail/productlist?categoryId=${bind.value.categoryId}&key=&sort=&timestamp=${Date.now()}`
        })
    }
})

export default detail