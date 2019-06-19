import { shallowMount, createLocalVue} from '@vue/test-utils'
import Question from '@/components/Question.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import sinon from 'sinon'


describe('Question.vue', () => {
  let localVue;
  let wrapper;
  const srcImg = "someURL";
  const questions = [
    {
    question: "What do you want?",
    answer: "something"
    },
    {
      question: "When do you want it?",
      answer: "sometimes"
    },
    {
      question: "How do you want it?",
      answer: "somehow"
    }
  ];
  const scoreAndIncrement = jest.fn();
  
  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify, {});
    localVue.use(VueRouter)


    wrapper = shallowMount(Question, { 
      localVue,
      propsData: {
        imgSrc: srcImg,
        questions: questions,
        scoreAndIncrement
      },
      mocks: {
        counter: Number,
        correct: Number,
        incorrect: Number,
        hideButtons: Boolean,
        showAns: Boolean
       
      },
    })
  })

  //TEXT
  test('check if renders button I dont know button text', () => {
    expect(wrapper.text()).toContain("I don't know")
  })
  
  test('check if renders button I know button text', () => {
    expect(wrapper.text()).toContain('I know')
  })

  test('check if render the question', () => {
    expect(wrapper.text()).toContain('What do you want?')
  })

  test('check if it renders the final message', () =>{
    expect(wrapper.text()).toContain('Congratulations! Your score is')
  })

  test('check if the questions is rendered to the card', () => {
    expect(wrapper.find('h3').text()).toBe('What do you want?')
  })

  test('check if the questions is rendered to the card', () => {
    expect(wrapper.find('ul').text()).toBe('something')
  })

  test('answer is hidden on initial render', () => {
    let a = wrapper.find('.answer-card')
    expect(a.element.style.display).toBe('none')
  })

  //METHODS
  test('increment method updates the counter', () => {
    wrapper.vm.increment();
    expect(wrapper.vm.counter).toBe(2);
    wrapper.vm.counter--
  })

  test('format answer correctly', () => {
    let formated = wrapper.vm.formatAnswer('abc|cba')
    expect(formated).toBe('<li>abc</li><li>cba</li>')
  })
   
  test('score and increment updates the score and counter', () => {
    wrapper.vm.scoreAndIncrement();
    expect(wrapper.vm.correct).toBe(1);
    expect(wrapper.vm.counter).toBe(2);
    wrapper.vm.counter--
  })

  test('score and show answer set to truth ', () => {
    wrapper.vm.scoreAndShowAnswer();
    expect(wrapper.vm.incorrect).toBe(1);
    expect(wrapper.vm.hideButtons).toBe(true);    
    expect(wrapper.vm.showAns).toBe(true);
  })

  //EVENTS
  // test('when I know button is clicked correct increments', () => {
  //   const button = wrapper.find('.greenBtn');
  //   button.trigger('click');
  //   expect(wrapper.vm.scoreAndIncrement).toHaveBeenCalled();
  //   //expect(wrapper.vm.scoreAndIncrement).toHaveBeenCalledTimes(1);
  // } )

  // test('when I dont know button is clicked incorrect increments', () => {
  //   let currentIncorect = wrapper.vm.incorrect;
  //   wrapper.find('#redBtn').trigger('click');
  //   //expect(wrapper.vm.correct).toBe(1);
  //   //expect(functions.scoreAndIncrement).toHaveBeenCalled();
  //   expect(wrapper.vm.incorrect.called).toBe(true)
  // } )
  
})