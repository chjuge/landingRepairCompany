import standartImg from '../resources/tarif_standart.jpg';
import overhaulImg from '../resources/tarif_overhaul.jpg';
import designerImg from '../resources/tarif_designer.jpg';
import { 
  CheckCircleTwoTone as Check, 
  ClockCircleTwoTone as Clock,
  ExclamationCircleTwoTone as Exclaim
 } from '@ant-design/icons';

export const FOOTER_TEXT = 'Семейный ремонт ООО ИНН 5003141930' +
  ' Ремонт квартир в Москве и Московской области';

export const navs = [
  { key: '1', label: 'Главная' },
  { key: '2', label: 'Тарифы' },
  { key: '3', label: 'Примеры работ' },
  { key: '4', label: 'Материалы' },
  { key: '5', label: 'О нас' },
  { key: '6', label: 'Контакты' },
];

export const INTRO_MAIN_HEADER = 'Семейный ремонт';
export const INTRO_SECONDARY_HEADER = 'Ремонт квартир в Москве с гарантией';
export const INTRO_TEXT = 'Свяжитесь с нами для консультации!';
export const CONTACT_NUMBER = '+79104086580';
export const CONTACT_EMAIL = 'semejnyjremont@bk.ru';

export const WHY_US_HEADER = 'Почему ремонт с нами — это выгодно и безопасно?';
export const whyUsList = [
  'Вы оплачиваете готовую работу поэтапно и только в том случае, если вас устраивает качество',
  'Получаете гарантию до 3-х лет, прописанную в договоре',
  'Спокойны за качество ремонта — у нас трудятся мастера узкого профиля. Людей «с улицы» и универсалов не нанимаем',
  'Помимо прораба на связи всегда отдел контроля качества. Он решит все вопросы и сложности, если вдруг они появятся',
];
export const WHY_US_TEXT = 'Оставьте заявку по email!';

export const TARIFFS_HEADER = 'Наши тарифы';
export const TARIFFS_INTRO_TEXT = 'Покупка нового жилья или желание «обновить», ' +
  'сделать комфортабельнее старое неизбежно приводит к такой необходимости, ' +
  'как ремонт квартиры. Расценки на нашу работу - одни из самых лояльных ' +
  'среди столичных фирм. У нас можно заказать любой вид переделки помещений, ' +
  'от бюджетной, до элитной с разработкой индивидуального дизайн-проекта ';

export const tarif_standart = [
  'Поклеим новые обои',
  'Постелим линолеум, ковролин или наливной пол',
  'Установим плинтусы',
  'Установим натяжной потолок',
  'Заменим карнизы',
  'Установим оконные откосы',
  'Поставим новые электроточки',
  'Проложим электрокабели',
  'Смонтируем выключатели и розетки',
];

export const tarif_overhaul = tarif_standart.concat([
  'Установим подоконники',
  'Установим новые межкомнатные двери',
]);

export const tarif_designer = tarif_overhaul.concat([
  'Помимо всех предыдущих работ',
  'Монтаж электрических кабелей',
  'Отделочные работы',
  'Прокладка труб и установка сантехоборудования',
  'Устройство стяжки',
  'Финишная отделка',
  'Декорирование интерьера',
  'Клининговые работы',
]);

const PLACEHOLDER = 'Здесь будет цена';
export const tarif_prices = [
  { key: 'tarif_standart', value: tarif_standart, title: 'Стандарт', price: PLACEHOLDER, src: standartImg },
  { key: 'tarif_overhaul', value: tarif_overhaul, title: 'Капитальный', price: PLACEHOLDER, src: overhaulImg },
  { key: 'tarif_designer', value: tarif_designer, title: 'Дизайнерский', price: PLACEHOLDER, src: designerImg },
];

export const MATERIALS_HEADER = 'Поможем с выбором и доставкой материалов';
export const MATERIALS_TEXT = 'Работаем с вашими материалами или поможем купить по оптовым ценам.' +
  ' Спланируем ваш ремонт так, чтобы он оставил только положительные эмоции.';

const importAllImages = (r) => r.keys().map(r);

export const images = importAllImages(require.context('../resources/', false, /.*(room)+.*\.(png|jpe?g|svg)$/));
export const EXAMPLES_HEADER = 'Работы нашей компании';

export const FAST_WORKING_HEADER = 'Наше преимущество в скорости';
export const fastWorkingPros = [{
  key: 'pros-1', header: 'Позвоните или оставьте заявку', icon: <Check />,
  description: 'Специалист перезвонит в течение 5 -10 минут. ' +
    'Проконсультирует, сориентирует по срокам, подскажет примерную стоимость'
}, {
  key: 'pros-2', header: 'Назначим выезд инженера-сметчика', icon: <Clock />,
  description: 'Согласуем удобное время для встречи. Если оставите заявку до ' +
    '13:00, отправим инженера уже сегодня. Это бесплатно и ни к ' +
    'чему вас не обязывает'
}, {
  key: 'pros-3', header: 'Рассчитаем смету сразу на объекте', icon: <Exclaim />,
  description: 'Произведем замеры и составим точную смету ремонта. ' +
    'Инженер проконсультирует по материалам, этапам ремонта и подскажет, ' +
    'на чем можно сэкономить без ущерба качеству.'
}];

export const CALL_TO_MANAGER = 'Позвоните менеджеру, чтобы договориться о посещении строящихся объектов';
export const ADDRESS = 'Большой Спасоглинищевский пер., 10, 10, стр.1 Большой Спасоглинищевский пер., 10, Москва, 101000';