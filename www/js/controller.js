var app = angular.module('starter.controllers', []);

app.controller('AppCtrl', function ($scope, $location) {
   	$scope.product = function() {
   		$location.path('/app/product');
   	}
   	$scope.member = function() {
   		$location.path('/app/tentang-nasabah');
   	}
});

app.controller('DashboardCtrl', function($scope) {

});



app.controller('ProductCtrl', function($scope, $location, $ionicPopup) {

	$scope.accounts = [];

	$scope.selectables = [{
	    account_name: "Mauro",
	    role: "juggler"
	}, {
	    account_name: "Silvia",
	    role: "chef"
	}, {
	    account_name: "Merlino",
	    role: "little canaglia"
	}, ];


	$scope.backHome = function() {
    	$location.path('/app/dashboard');
    }


	$scope.groups = [{
            "name": "First"
        }
    ];

    $scope.showAlert = function(msg) {
        $ionicPopup.alert({
            title: msg.title,
            template: msg.message,
            okText: 'Ok',
            okType: 'button-assertive'
        });
    };

    $scope.showSuccess = function(msg) {
        $ionicPopup.alert({
            title: msg.title,
            template: msg.message,
            okText: 'Ok',
            okType: 'button-positive'
        });
    };

    $scope.toggleGroup = function(group) {

        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };

	$scope.pushAccount = function() {

		if (!$scope.accounts.account_name) {
			$scope.showAlert({
                title: "Information",
                message: "Nama tidak boleh kosong"
            });
		}else {

			$scope.accounts.push({
	            account_name : $scope.accounts.account_name
	        });

	        $scope.accounts.account_name = "";

	        $scope.showSuccess({
                title: "Information",
                message: "Sucess Input Data"
            });

            $scope.shownGroup = $scope.groups[0];
		}

	}

	$scope.removeAccount = function(id) {

		var confirmPopup = $ionicPopup.confirm({
            title: 'Delete Data',
            template: 'Are you sure you want to delete?',
            cancelText: 'CANCEL',
            cancelType: 'button-light'
        });

        confirmPopup.then(function(res) {
            if (res) {
                $scope.accounts.splice(id, 1);
                $scope.showSuccess({
                    title: "Information",
                    message: "Data deleted"
                });
            } else {
                console.log('cancel');
            }
        });
	}
	

});

app.controller('TentangNasabahCtrl', function($scope, $ionicPopup, $location, ionicDatePicker) {

	$scope.selectedDate;
	$scope.nasabah = {};

	var ipObj1 = {
	   	callback: function (val) {  //Mandatory
          var date = new Date(val);
          $scope.selectedDate = moment(date).format('DD/MM/YYYY');
        },
		// from: new Date(2012, 1, 1), //Optional
		// to: new Date(2016, 10, 30), //Optional
		inputDate: new Date(),      //Optional
		mondayFirst: true,          //Optional
		disableWeekdays: [0],       //Optional
		closeOnSelect: false,       //Optional
		templateType: 'popup'       //Optional
    };

    $scope.openDatePicker = function(){
      	ionicDatePicker.openDatePicker(ipObj1);
    };

    $scope.showAlert = function(msg) {
        $ionicPopup.alert({
            title: msg.title,
            template: msg.message,
            okText: 'Ok',
            okType: 'button-assertive'
        });
    };

    $scope.showSuccess = function(msg) {
        $ionicPopup.alert({
            title: msg.title,
            template: msg.message,
            okText: 'Ok',
            okType: 'button-positive'
        });
    };


    $scope.backHome = function() {
    	$location.path('/app/dashboard');
    }

   	$scope.save = function() {


   		if (!$scope.nasabah.nama_nasabah) {
   			$scope.showAlert({
                title: "Information",
                message: "Nasabah tidak boleh kosong"
            });
   		}else if(!$scope.nasabah.jk) {
   			$scope.showAlert({
                title: "Information",
                message: "Pilih Jenis Kelamin"
            });
   		}else if(!$scope.nasabah.perokok) {
   			$scope.showAlert({
                title: "Information",
                message: "Pilih tipe perokok"
            });
   		}else if(!$scope.nasabah.tanggal_lahir) {
   			$scope.showAlert({
                title: "Information",
                message: "Tanggal Lahir tidak boleh kosong"
            });
   		}else if(!$scope.nasabah.pekerjaan) {
   			$scope.showAlert({
                title: "Information",
                message: "Pilih Pekerjaan"
            });
   		}else {
   			$scope.showSuccess({
                title: "Data",
                message: 'Nama: ' + $scope.nasabah.nama_nasabah + '<br /> ' + ' Jenis Kelamin :' + $scope.nasabah.jk  + '<br /> ' + ' Perokok : ' + $scope.nasabah.perokok + '<br /> ' + ' Tanggal Lahir : ' + '<br /> ' + $scope.nasabah.tanggal_lahir + '<br /> ' + ' Pekerjaan : ' + '<br /> ' + $scope.nasabah.pekerjaan
            });
   		}
   	}

});