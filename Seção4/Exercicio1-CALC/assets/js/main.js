function createCalculator() {
  return {
    display: document.querySelector('.display'),
    start() {
      this.buttonClick();
      this.pressEnter();
    },
    pressEnter() {
      this.display.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
          e.preventDefault();
          this.makeAccount();
        }
      })
    },
    clearDisplay() {
      this.display.value = '';
    },
    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    makeAccount() {
      let conta = this.display.value;

      try {
        conta = eval(conta); // transforma texto em codigo e executa

        if (!conta && conta !== 0) {
          alert('Conta inválida!');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida!');
        return;
      }
    },
    buttonClick() {
      document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('btn-num')) {
          this.btnFromDisplay(el.innerText);
        }
        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if(el.classList.contains('btn-del')) {
          this.deleteOne();
        }
        if(el.classList.contains('btn-eq')) {
          this.makeAccount();
        }

        this.display.focus();
      }.bind(this)); // vincula o this da calculadora
    },
    btnFromDisplay(valor) {
      this.display.value += valor; // contacatenar o que tem mais o que vai ser add
    }
  };
}

const calculator = createCalculator();
calculator.start();