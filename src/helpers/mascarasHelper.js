/* eslint-disable */
class MascarasHelper {
  constructor() {
    throw new Error('MascarasHelper não pode ser instanciada');
  }

  static numerico(v) {
    v = v.replace(/\D/g, '');
    return v;
  }

  static emailValido(v) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexEmail.test(v)) {
      return true;
    }
    return false;
  }

  static telefone(v) {
    v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
    v = v.replace(/^(\d\d)(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos

    return v;
  }

  static numeroSemFormatacao(v) {
    v = v.replace(/[^a-zA-Z0-9]/g, '');
    return v;
  }

  static imagemCodigoBarras(v) {
        let divisor = v.split(' ');
        let codigobarras = '';

        divisor.forEach(item => {
            codigobarras += item.substr(0, 11);
        });

        return codigobarras;
    }
}
module.exports = MascarasHelper;

/* eslint-enable */
