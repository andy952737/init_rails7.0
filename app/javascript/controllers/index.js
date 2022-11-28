// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)


// set(variable, value) - 将指定数值赋值给指定 krpano 对象
// get(variable) - 返回指定 krpano 变量的数值
// call(action) - 调用和执行任意 krpano 动作代码 
// spheretoscreen(h, v) - 直接调用 spheretoscreen 动作
// screentosphere(x ,y) - 直接调用 screentosphere 动作 