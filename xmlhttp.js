
			function sendform(){
				var http = new XMLHttpRequest();
				var params =  document.getElementById('txtacomp').value;
				var values;
	      var options = '';

				http.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200) {

							values = JSON.parse(http.responseText);
							console.log(values);

							for(var i = 0; i < values.length; i++){
	              options += '<option value="'+values[i]+'" />';
								console.log(i);
								}

	            document.getElementById('dlid').innerHTML = options;
						}

						}

				http.open("POST", "http://localhost:8076/" + params, true);
				http.send();
			}
