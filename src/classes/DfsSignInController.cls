public class DfsSignInController {
	public transient String username { get; set; }
    public transient String password { get; set; }

    public PageReference login() {
        return Site.login(username, password, '/secured');
    }
}