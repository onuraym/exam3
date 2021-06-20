    const modal = document.querySelector(".modal-overlay");
		const openBtn = document.querySelector(".open-modal");
		const closeBtn = document.querySelector(".close-btn");

		// переключаем класс у модалки
		// на тот, у которого есть нужные свойства (show-modal)

		function toggleModal () {
			modal.classList.toggle("show-modal");
		}

		function windowOnClick(event) {
			if(event.target === modal){
				toggleModal();
			}
		}

		window.addEventListener("click", windowOnClick);
		openBtn.addEventListener("click", toggleModal)
		closeBtn.addEventListener("click", toggleModal)

    const form = document.querySelector(".form");
    const name = document.querySelector(".name")

    let formObj = {};

    form.onsubmit = function() {
      var name = this.name.value;
      var email = this.email.value;
      var text = this.text.value;
      formObj.name = name;
      formObj.email = email;
      formObj.text = text;
      console.log(formObj);
      return false;
    };

		const modalOverlay = document.querySelector(".modal-overlay2");
    function toggleModal2 () {
			modalOverlay.classList.toggle("show-modal2");
		}

		function windowOnClick2(event) {
			if(event.target === modalOverlay){
				toggleModal2();
			}
		}
    const image = document.querySelector(".card-image")
    const closeImgButton = document.querySelector(".close-image_btn")

    window.addEventListener("click", windowOnClick2);
		image.addEventListener("click", toggleModal2);
		closeImgButton.addEventListener("click", toggleModal2);
		