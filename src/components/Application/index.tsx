export function Application() {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>

      <p>All fields are mandatory</p>

      <span title="close">X</span>

      <div data-testid="custom-element">Custom HTML element</div>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fullname"
            value="Bruce Wayne"
            onChange={() => {}}
          />
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>

        <img src="https://test.com" alt="A person with a laptop" />

        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="BR">Brazil</option>
            <option value="AU">Australia</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" name="terms" id="terms" />I agree to the
            terms and conditions
          </label>
        </div>

        <button disabled type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
