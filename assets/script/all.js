$(document).ready(function () {
    // 漢堡選單
    // $('.ham-icon').click(function(e) {
    //     e.preventDefault();
    //     $('.navbar').toggleClass('active')
    // })
    
    $('#sub-menu-dropdown').hide();
    $('#sub-menu-add-admin').hide();
    
    let params = (new URL(document.location)).searchParams;
    // let title = params.get('title'); // is the string "Jonathan Smith".
    // let age = parseInt(params.get('age')); // is the number 18
    var title = $(this).attr('title');
    console.log(title);

    if (title == 'Assignment'){
        $('#sub-menu-dropdown').show();
    }else if (title == 'Admin'){
        $('#sub-menu-add-admin').show();
    }


    $('.custom-btn-success').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault();
        // 顯示編輯視窗
        $('.replay').show();
    })
    
    $('.custom-btn-cancel').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault(); 
        // 隱藏編輯視窗
        $('.replay').hide();    
    })

    $('.arrow_down').click(function (e) {
        // 取消預設 event 事件
        e.preventDefault(); 
        // 隱藏編輯視窗
        // var str = $( '.close' ).first().text();
        // if 
        // $( '.close' ).last().html( str ); 
        $('.arrow_down').toggleClass('active1')   
    })
});