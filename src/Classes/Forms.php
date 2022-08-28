<?php
require 'vendor/autoload.php';

abstract class Forms{
    protected int $formLength = 5;   

    // faire les getters et les setters
    // faire la function de création de base qui sera finaliser dnas la forme

    public function getFormLength() : int
    {
        return $this->formLength;
    }

    public function setFormLength(int $formLength) {
        if($formLength > 0){
            $this->formLength = $formLength;
        }
    }
}
