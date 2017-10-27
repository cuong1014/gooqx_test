<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
	public function index()
	{
		$this->load->library('CI_Minifier');
		$this->ci_minifier->init(4); 
		$data = array();
		$data["title"] = "Probearbeit Blog";
		$this->load->view('index', $data);
	}
}
