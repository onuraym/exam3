const modal = document.querySelector(".modal");
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
		