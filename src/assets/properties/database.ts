import {Properties} from "../../app/modules/web/section-properties/model/properties";
import {Immobile} from "../../app/modules/web/details/model/immobile";

export class Database {

  public fun_properties(): Properties[] {
    return [
      {
        id: 1,
        active: true,
        title: "Jardim de Alah",
        subtitle: "R$ 4.620.000,00",
        image: "../../../../assets/properties/Jardim_de_alah_01.png",
        content: "Excelente terreno, com 6.600 m², próximo a praia, em um dos locais mais nobres da cidade."
      },
      {
        id: 2,
        active: true,
        title: "Forquilha",
        subtitle: "R$ 28.000.000,00",
        image: "../../../../assets/properties/forquilha_01.png",
        content: "Terreno com 8,7 hectares, próximo ao retorno da forquilha."
      },
      {
        id: 3,
        active: true,
        title: "Estrada de Ribamar",
        subtitle: "R$ 3.600.000,00",
        image: "../../../../assets/properties/av_ribamar_01.jpg",
        content: "Terreno com 3000 m², próximo ao Shopping Pátio Norte."
      },
      {
        id: 4,
        active: true,
        title: "Araçagy",
        subtitle: "R$ 800.000,00",
        image: "../../../../assets/properties/nove_lotes_01.jpg",
        content: "Nove lotes juntos, sendo 7 frente para Av. Norte. Excelente oportunidade."
      },
      {
        id: 5,
        active: true,
        title: "Araçagy",
        subtitle: "R$ 1.200.000,00",
        image: "../../../../assets/properties/mirante_03.jpg",
        content: "Ótimo investimento, frente para o mar, no mirante no Araçagy."
      },
      {
        id: 6,
        active: true,
        title: "Araçagy",
        subtitle: "R$ 115.000,00",
        image: "../../../../assets/properties/aracagy_praia_01.jpg",
        content: "Terreno próximo a praia do Meio, em uma localidade tranquila. "
      },
      {
        id: 7,
        active: true,
        title: "Araçagy",
        subtitle: "R$ 1.000.000,00",
        image: "../../../../assets/properties/aracagy_batista_01.jpg",
        content: "Lote em ótima localização, na descida para a praia."
      },
      {
        id: 8,
        active: true,
        title: "Cohajap",
        subtitle: "R$ 240.000,00",
        image: "../../../../assets/properties/cohajap_01.jpg",
        content: "Dois lotes juntos bem localizados, próximos a Pizza One."
      },
      {
        id: 9,
        active: true,
        title: "Cohab",
        subtitle: "R$ 1.300.000,00",
        image: "../../../../assets/properties/cohab_02.jpg",
        content: "Oportunidade incrível para investir. Excelente localização. "
      },
      {
        id: 10,
        active: true,
        title: "Turu",
        subtitle: "R$ 1.500.000,00",
        image: "../../../../assets/properties/grafica_01.jpg",
        content: "Prédio comercial, em frente ao Matheus supermercados. "
      }
    ]
  }

  public fun_immobileDetails(): Immobile[] {
    return [
      {
        id: 1,
        title: "Jardim de Alah - Olho D'água",
        photos: [
          "../../../../assets/properties/Jardim_de_alah_01.png",
          "../../../../assets/properties/jardim_de_alah_02.jpeg"
        ],
        text: "Excelente lote medindo 60 x 110m (6600m²), no bairro Jardim de Alah, área nobre da cidade, em frente a Avenida Litorânea. Valor de R$ 700,00 m², total de R$ 4.620.000,00 (quatro milhões, seiscentos e vinte mil reais).",
      },
      {
        id: 2,
        title: "Forquilha - Estrada de Ribamar",
        photos: [
          "../../../../assets/properties/forquilha_02.jpg",
          "../../../../assets/properties/froquilha_03.jpg"
        ],
        text: "Área próximo ao retorno da Forquilha, medindo 8,7 Hectares ao lado condomínio Vitória, excelente para prédios residenciais, supermercado, faculdade, hospitais. Valor de R$ 28.000.000,00 (vinte e oito milhões de reais),",
      },
      {
        id: 3,
        title: "Avenida de Sã́o José de Ribamar",
        photos: [
          "../../../../assets/properties/av_ribamar_02.jpg",
          "../../../../assets/properties/av_ribamar_03.jpg"
        ],
        text: "Área comercial no asfalto da Avenida de Ribamar, com 3000m² sendo 80 metros de frente. Área muito bem localizada, em frente à entrada do Hospital Socorrão, e próximo ao Shopping Pátio Norte, Valor de R$ 3.600.000,00 (três milhões e seiscentos mil reais)",
      },
      {
        id: 4,
        title: "Araçagy - Avenida Norte",
        photos: [
          "../../../../assets/properties/nove_lotes_02.jpg",
          "../../../../assets/properties/nove_lotes_03.jpg"
        ],
        text: "Excelente área para condomínio, ponto comercial ou investimento. São 9 lotes juntos no Loteamento Altos do Araçagy, com escritura e registro. Valor de R$ 800.000,00 (oitocentos mil reais)",
      },
      {
        id: 5,
        title: "Araçagy - Mirante",
        photos: [
          "../../../../assets/properties/mirante_01.jpg",
          "../../../../assets/properties/mirante_02.jpg"
        ],
        text: "Excelente área de 5000 m² (06 lotes juntos), com uma vista inigualável, ao lado da Escola Marista do Araçagy Com condomínio fechado, dando toda a segurança para você morar. Asfaltado e todo habitado. Valor de R$ 1.200.000,00 (um milhão e duzentos mil reais).",
      },
      {
        id: 6,
        title: "Araçagy - Próximo a praia do Meio",
        photos: [
          "../../../../assets/properties/aracagy_praia_01.jpg",
        ],
        text: "Lote bem localizado, no asfalto, fora da rua principal, final da rua, localidade bem tranquila, longe do fluxo de pedestres e carros. Com luz e água (poço próprio). Excelente localização, na descida da praia do meio (bar Kanaloa) à 5 minutos de caminhada. Valor de R$ 115.000,00 (cento e quinze mil reais)",
      },
      {
        id: 7,
        title: "Araçagy - Próximo a praia",
        photos: [
          "../../../../assets/properties/aracagy_batista_01.jpg",
          "../../../../assets/properties/aracagy_batista_02.jpg"
        ],
        text: "Excelente área para construção de condomínio residencial, sítio ou investimento. Contendo 3.300 m² com escritura e registro. Valor de R$  1.000.000,00 (um milhão de reais).",
      },
      {
        id: 8,
        title: "Cohajap",
        photos: [
          "../../../../assets/properties/cohajap_02.jpg",
          "../../../../assets/properties/cohajap_03.jpg"
        ],
        text: "Dois Lotes lado a lado, muito bem localizados a 150 metros da avenida da Cohama, atrás da Pizza One,excelente para construir sua casa ou para investimento. Um Lote de 12 x 28 m no Valor de R$ 240.000,00 (duzentos e quarenta mil reais) e um Lote de 11 x 27 m no Valor de R$ 220.000,00 (duzentos e vinte mil reais).",
      },
      {
        id: 9,
        title: "Cohab",
        photos: [
          "../../../../assets/properties/cohab_01.jpg",
          "../../../../assets/properties/cohab_02.jpg"
        ],
        text: "Área de 4000 m² bem localizada no asfalto, subindo Av. do Pop Center na COHAB, Excelente para condomínio ou investimento. Valor de R$ 1.300.000,00 (um milhào e trezentos mil reais).",
      } ,
      {
        id: 10,
        title: "Turu",
        photos: [
          "../../../../assets/properties/grafica_02.jpg",
          "../../../../assets/properties/grafica_03.jpg"
        ],
        text: "Prédio comercial na Av. São Luís Rei de França, muito bem localizado, em frente ao novo Mateus e Caixa econômica federal. Terreno 900 m² (20 x 45m), com área construída de 700 M². Valor de R$ 1.500.000,00 (um milhão e quinhentos mil reais).",
      }
    ]
  }
}
