"use client"
import { useState } from 'react';

export default function IMCCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateIMC = () => {
    if (height !== '' && weight !== '') {
      const alturaMeters = height / 100;
      const imc = (weight / (alturaMeters * alturaMeters)).toFixed(1);

      let message = '';
      if (imc < 18.5) {
        message = 'Abaixo do peso!';
      } else if (imc < 25) {
        message = 'Você está com o peso ideal!';
      } else if (imc < 30) {
        message = 'Você está levemente acima do peso!';
      } else if (imc < 35) {
        message = 'Cuidado! Obesidade grau I';
      } else if (imc < 40) {
        message = 'Cuidado! Obesidade grau II';
      } else {
        message = 'Cuidado! Obesidade grau III';
      }

      setResult(`Seu IMC é ${imc}. ${message}`);
    } else {
      setResult('Preencha todos os campos!!!');
    }
  };

  return (
    <div className="container3">
      <h1>Calcule seu IMC</h1>
      <div>
        <p>Digite seu peso</p>
        <div>
          <input
            id="peso"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <span>Kg</span>
        </div>
      </div>
      <div>
        <p>Digite sua altura</p>
        <input
          id="altura"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <span>cm</span>
      </div>
      <div>
        <input
          id="btnCalcular"
          className="botao-calcular"
          type="button"
          value="Calcular"
          onClick={calculateIMC}
        />
      </div>
      <div id="resultado">{result}</div>
    </div>
  );
}
