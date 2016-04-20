global class DfsUrlRewriter implements Site.UrlRewriter {

	private Map<String, String> urlMapping;
	
	String SIGNIN_PAGE = '/signin';

	String SIGNIN_SF_PAGE = '/DfsSignIn';

	global DfsUrlRewriter() {
		urlMapping = new Map<String, String> {
			'/signin' => '/DfsSignIn',
			'/secured' => '/DfsApplication'
		};
	}

	global PageReference mapRequestUrl(PageReference friendlyUrl) {
		String url = friendlyUrl.getUrl();

		for (String friendlyBaseUrl : urlMapping.keySet()) {
			if (url.startsWith(friendlyBaseUrl)) {
				String salesforceBaseUrl = urlMapping.get(friendlyBaseUrl);
				String path = url.substring(friendlyBaseUrl.length(), url.length());
				return new PageReference(salesforceBaseUrl + path);
			}
		}
		
		return null;
	}

    global PageReference[] generateUrlFor(PageReference[] salesforceUrls) {
		List<PageReference> friendlyUrls = new List<PageReference>();

		for (PageReference salesforceUrl : salesforceUrls) {

			Boolean foundInMap = false;
			String url = salesforceUrl.getUrl();
			
			for (String friendlyBaseUrl : urlMapping.keySet()) {
				String salesforceBaseUrl = urlMapping.get(friendlyBaseUrl);
				if (url.startsWith(salesforceBaseUrl)) {
					foundInMap = true;
					String path = url.substring(salesforceBaseUrl.length(), url.length());
					friendlyUrls.add(new PageReference(friendlyBaseUrl + path));
				}
			}

			if (!foundInMap) {
				friendlyUrls.add(salesforceUrl);
			}
		}

    	return friendlyUrls;
    }
}