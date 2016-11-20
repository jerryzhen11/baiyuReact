<?php
error_reporting(0);
if (!defined('BASEPATH'))
    exit('No direct access allowed.');

/**
 * MY_Init_Controller
 *
 * Initialize
 * @author      zhukejin@msn.com
 * @version     1.0
 * @since       1.0 
 */
require APPPATH . '/libraries/REST_Controller.php';

class MY_Init_Controller extends MY_Auth_Controller {

    public function __construct() {
        parent::__construct();
    }

    /**
     *  记录用户访问信息
     */
    private function _user_visitLog() {
        // 此处记录log
    }

    /**
     * [dataFormat 格式化输出]
     * @param [string] [$msg] [返回信息]
     * @return [type] [description]
     */
    public function dataFormat($msg = "",$errorCode="1" ,$httpCode = 200) {
        $this->_data['errorCode'] = $errorCode;
        $this->_data['msg'] = $msg;
        $this->response($this->_data, $code);
        exit;
    }

    /* end of function in parent */
}

/* End of file MY_Init_Controller.php */
/* Location: ./application/core/MY_Init_Controller.php */
