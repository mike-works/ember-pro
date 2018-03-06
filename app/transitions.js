export default function() {
  this.transition(
    this.fromRoute('posts.index'),
    this.toRoute('posts.show'),
    this.use('toLeft')
  );
  this.transition(
    this.fromRoute('posts'),
    this.toRoute('auth'),
    this.use('toDown'),
    this.reverse('toUp')
  );
  this.transition(
    this.childOf('.char-count'),
    this.use('toRight', { duration: 200 })
  );
  this.transition(
    this.matchSelector('.char-count'),
    this.use('fade', { duration: 1000 })
  )
}
