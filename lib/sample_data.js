if (Games.find().count() === 0) {
   Games.insert({
      players: ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
      curPlayer: 'Player 1',
      curAnnouncement: '31',
      curDiceThrow: '41'
   });
}