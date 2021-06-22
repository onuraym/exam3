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

		// const modalOverlay1 = document.querySelector(".modal-overlay1");
		// const modalOverlay2 = document.querySelector(".modal-overlay2");
		// const modalOverlay3 = document.querySelector(".modal-overlay3");
		// const modalOverlay4 = document.querySelector(".modal-overlay4");
		// const modalOverlay5 = document.querySelector(".modal-overlay5");
		// const modalOverlay6 = document.querySelector(".modal-overlay6");
		// const modalOverlay7 = document.querySelector(".modal-overlay7");
		// const modalOverlay8 = document.querySelector(".modal-overlay8");

    

    // const image1 = document.querySelector(".card-image1")
		// const image2 = document.querySelector(".card-image2")
		// const image3 = document.querySelector(".card-image3")
		// const image4 = document.querySelector(".card-image4")
		// const image5 = document.querySelector(".card-image5")
		// const image6 = document.querySelector(".card-image6")
		// const image7 = document.querySelector(".card-image7")
		// const image8 = document.querySelector(".card-image8")
    // const closeImgButton1 = document.querySelector(".close-image_btn1")
		// const closeImgButton2 = document.querySelector(".close-image_btn2")
		// const closeImgButton3 = document.querySelector(".close-image_btn3")
		// const closeImgButton4 = document.querySelector(".close-image_btn4")
		// const closeImgButton5 = document.querySelector(".close-image_btn5")
		// const closeImgButton6 = document.querySelector(".close-image_btn6")
		// const closeImgButton7 = document.querySelector(".close-image_btn7")
		// const closeImgButton8 = document.querySelector(".close-image_btn8")

		// image1.addEventListener("click", 
		// 	function toggleModal1 () {
		// 		modalOverlay1.classList.toggle("show-modal2");
		// 	}
		// );
		// closeImgButton1.addEventListener("click", toggleModal1);

		// image2.addEventListener("click",
		// 	function toggleModal2 () {
		// 		modalOverlay2.classList.toggle("show-modal2");
		// 	}
		// );
		// closeImgButton2.addEventListener("click", toggleModal2);

		// image3.addEventListener("click",
		// 	function toggleModal3 () {
		// 		modalOverlay3.classList.toggle("show-modal2");
		// }
		// );
		// closeImgButton3.addEventListener("click", toggleModal3);

		// image4.addEventListener("click",
		// 	function toggleModal4 () {
		// 		modalOverlay4.classList.toggle("show-modal2");
		// }
		// );
		// closeImgButton4.addEventListener("click", toggleModal4);

		// image5.addEventListener("click",
		// 	function toggleModal5 () {
		// 		modalOverlay5.classList.toggle("show-modal2");
		// }
		// );
		// closeImgButton5.addEventListener("click", toggleModal5);

		// image6.addEventListener("click",
		// 	function toggleModal6 () {
		// 		modalOverlay6.classList.toggle("show-modal2");
		// }
		// );
		// closeImgButton6.addEventListener("click", toggleModal6);

		// image7.addEventListener("click",
		// 	function toggleModal7 () {
		// 		modalOverlay7.classList.toggle("show-modal2");
		// }
		// );
		// closeImgButton7.addEventListener("click", toggleModal7);

		// image8.addEventListener("click",
		// 	function toggleModal8 () {
		// 		modalOverlay8.classList.toggle("show-modal2");
		// }
		// );
		// closeImgButton8.addEventListener("click", toggleModal8);
		
		