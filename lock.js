var Lock = function(){
    var keys = {};

    function lock( key ){
        keys[key] = "locked";
    }

    function unlock( key ){
        delete keys[key];
    }

    function islocked( key ){
        return keys[key] && ( keys[key] === "locked" );
    }

    var exports = {};
    exports.lock = lock;
    exports.unlock = unlock;
    exports.islocked = islocked;

    return exports;
};