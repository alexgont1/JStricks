describe("checkSpam", function() {
  it('this is spam "buy ViAgRA now"', function() {
    assert.isTrue(checkSpam('buy ViAgRA now'));
  });

  it('this is spam "free xxxxx"', function() {
    assert.isTrue(checkSpam('free xxxxx'));
  });

  it('this is not spam "innocent rabbit"', function() {
    assert.isFalse(checkSpam('innocent rabbit'));
  });
});