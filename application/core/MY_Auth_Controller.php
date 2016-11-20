<?php
if (!defined('BASEPATH'))
    exit('No direct access allowed.');

/**
 * MY_Auth_Controller
 *
 * Auth Class
 * @author      zhukejin@msn.com
 * @version     1.0
 * @since       1.0 
 */
class MY_Auth_Controller extends CI_Controller {

    public function __construct() {
        parent::__construct();
        // $this->_is_logined();
    }

    private function _is_logined() {
        //这里进行auth 认证
    }
}

?>