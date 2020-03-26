var hospitalCommon = {}

hospitalCommon.breakCodeProcess = function (code) {
    debugger
    if (code == 20) {
        if (confirm('现在去登录>>>')) {
            $(`<a href="/hospital/maintain/login.html"  >123</a>`)[0].click()
        }
    }

}


hospitalCommon.newTab = function (title, url) {
    parent.$('#tabPad').tabs('add', {
        url: url,
        title: title,
        closable: true,
        width: '100%',
        content: `<iframe src="${url}" style="width:100%;height:100%;border:none;"/>`,
        tools: [{
            iconCls: 'icon-mini-refresh',
            handler: function () {
                var current_tab = parent.$('#tabPad').tabs('getSelected');
                parent.$('#tabPad').tabs('update', {
                    tab: current_tab,
                    options: {
                        content: current_tab.panel('options', 'content'),
                    }
                });
            }
        }
        ]
    });
}







