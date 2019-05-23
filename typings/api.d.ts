declare namespace API {
    /**
     * 发送get请求
     * @param reqParams 请求参数
     * @param is_need_loading_noti  是否需要loading
     * @param is_need_success_noti  是否需要成功提示
     * @param is_need_fail_noti  是否需要失败提示
     */
    function get(
        option: Object,
        is_need_loading_noti: Boolean = true,
        is_need_success_noti: Boolean = false,
        is_need_fail_noti: Boolean = true
    ): JQuery.Promise<TR1, TJ1, never>;
    /**
     * 发送post请求
     * @param reqParams 请求参数
     * @param is_need_loading_noti  是否需要loading
     * @param is_need_success_noti  是否需要成功提示
     * @param is_need_fail_noti  是否需要失败提示
     */
    function post(
        option: Object,
        is_need_loading_noti: Boolean = true,
        is_need_success_noti: Boolean = false,
        is_need_fail_noti: Boolean = true
    ): JQuery.Promise<TR1, TJ1, never>;

    /**
     * 发送自定义类型的请求
     * @param reqParams 请求参数
     * @param is_need_loading_noti  是否需要loading
     * @param is_need_success_noti  是否需要成功提示
     * @param is_need_fail_noti  是否需要失败提示
     */
    function send(
        option: Object,
        is_need_loading_noti: Boolean = true,
        is_need_success_noti: Boolean = false,
        is_need_fail_noti: Boolean = true
    ): JQuery.Promise<TR1, TJ1, never>;

    /**
     * 旧版本发送请求
     * @param reqParams 请求参数
     * @param success 成功回调
     * @param fail 失败回调
     * @param is_need_loading_noti  是否需要loading
     * @param is_need_success_noti  是否需要成功提示
     * @param is_need_fail_noti  是否需要失败提示
     */
    function send_call_to_server(
        reqParams: Object,
        success: Function,
        fail: Function,
        is_need_loading_noti: Boolean = true,
        is_need_success_noti: Boolean = false,
        is_need_fail_noti: Boolean = true
    ): void;
}
