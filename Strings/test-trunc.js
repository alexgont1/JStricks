describe("truncate", function() {
  it("truncate string to lenght ('...' included)", function() {
    assert.equal(
      truncate("Veeeeerrrrryyyyy lllllooooonnnng ssstttriinnng", 20),
      "Veeeeerrrrryyyyy ..."
    );
  });

  it("doesn't change short strings", function() {
    assert.equal(
      truncate("Hello everybody!", 20),
      "Hello everybody!"
    );
  });

});