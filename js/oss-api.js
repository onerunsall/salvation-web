var ossApi = new Object();ossApi.fileUpload = function (path, formId, responseProcessor) {    if (!path)        path = "/salvation/oss/";    var fd = new FormData(document.getElementById(formId));    var data;    console.log(fd);    $.ajax({        url: 'http://www.njshangka.com/oss/file/upload?path=' + path,        type: 'POST',        data: fd,        async: false,        cache: false,        contentType: false,        processData: false,        dataType: 'json',        success: function (data) {            //alert(data)            responseProcessor(data);        },        error: function (xhr, msg, reasonString) {            alert('请求错误，请稍后再试...');            console.log('error回调函数...响应完成但存在问题');            console.log(arguments);        }    });};ossApi.imageUpload = function (path, quality, formId, responseProcessor) {    var fd = new FormData(document.getElementById(formId));    var data;    console.log(fd);    $.ajax({        url: 'http://www.njshangka.com/oss/image/upload?path=' + path + "&quality=" + quality,        type: 'POST',        data: fd,        async: false,        cache: false,        contentType: false,        processData: false,        success: function (data) {            responseProcessor(data);        },        error: function (xhr, msg, reasonString) {            alert('请求错误，请稍后再试...');            console.log('error回调函数...响应完成但存在问题');            console.log(arguments);        }    });};