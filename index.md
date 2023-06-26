# Build artifacts

One of the main features of the [flow testing framework](https://github.com/Mastercard/flow) is the production of rich execution reports.
Until such a time as [upload-artifact#14](https://github.com/actions/upload-artifact/issues/14) is addressed, we're reduced to abusing github pages to show these artifacts to best effect.
See [test.yml](https://github.com/Mastercard/flow/blob/main/.github/workflows/test.yml), [mutation.yml](https://github.com/Mastercard/flow/blob/main/.github/workflows/mutation.yml) and [regen_index.pl](https://github.com/Mastercard/flow/blob/pages/regen_index.pl) for the gory details.

## Execution reports

These reports are the result of comparing a unified model of system behaviour against:
 * an instance of the complete system (The "app-itest" report)
 * system components in isolation (everything else)

<!-- start:execution -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/latest/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-26T08:17:20</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1687767440/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687767440/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687767440/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687767440/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687767440/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687767440/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687767440/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-26T08:16:28</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1687767388/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687767388/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687767388/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687767388/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687767388/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687767388/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687767388/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:34:03</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.4</code></th>
			<td><a href="execution/1687743243/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687743243/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687743243/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687743243/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687743243/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687743243/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687743243/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:32:05</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.4.1</code></th>
			<td><a href="execution/1687743125/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687743125/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687743125/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687743125/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687743125/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687743125/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687743125/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:28:38</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.2.0</code></th>
			<td><a href="execution/1687742918/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687742918/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687742918/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687742918/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687742918/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687742918/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687742918/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:27:53</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.2</code></th>
			<td><a href="execution/1687742873/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687742873/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687742873/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687742873/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687742873/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687742873/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687742873/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:27:18</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-coverage-2.2.1</code></th>
			<td><a href="execution/1687742838/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687742838/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687742838/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687742838/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687742838/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687742838/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687742838/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-19T06:43:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.0.1</code></th>
			<td><a href="execution/1687157003/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687157003/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687157003/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687157003/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687157003/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687157003/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687157003/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-19T06:40:52</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1687156852/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687156852/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687156852/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687156852/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687156852/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687156852/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687156852/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-19T06:38:01</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1687156681/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687156681/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687156681/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687156681/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687156681/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687156681/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687156681/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:39:37</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.3</code></th>
			<td><a href="execution/1687138777/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687138777/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687138777/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687138777/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687138777/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687138777/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687138777/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:37:57</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.1</code></th>
			<td><a href="execution/1687138677/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687138677/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687138677/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687138677/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687138677/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687138677/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687138677/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:33:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.0.1</code></th>
			<td><a href="execution/1687138423/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687138423/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687138423/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687138423/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687138423/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687138423/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687138423/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:23:17</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.0</code></th>
			<td><a href="execution/1687137797/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1687137797/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1687137797/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1687137797/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1687137797/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1687137797/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1687137797/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-14T15:00:51</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686754851/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686754851/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686754851/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686754851/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686754851/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686754851/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686754851/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-14T14:50:20</code></th>
			 <th><code>changelog_auto</code></th>
			<td><a href="execution/1686754220/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686754220/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686754220/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686754220/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686754220/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686754220/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686754220/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-14T09:19:44</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686734384/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686734384/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686734384/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686734384/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686734384/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686734384/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686734384/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-14T08:20:12</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="execution/1686730812/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686730812/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686730812/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686730812/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686730812/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686730812/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686730812/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-13T16:03:45</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="execution/1686672225/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686672225/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686672225/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686672225/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686672225/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686672225/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686672225/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-06-12T08:08:18</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1686557298/example/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1686557298/example/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1686557298/example/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1686557298/example/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1686557298/example/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1686557298/example/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1686557298/example/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
	</tbody>
</table>
<!-- end:execution -->

## Mutation testing

Test quality metrics for framework packages.

<!-- start:mutation -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.4.1</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:40:06</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.4.1</code></th>
			<td><a href="mutation/1687743606/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:39:25</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.4</code></th>
			<td><a href="mutation/1687743565/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:37:36</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.2.0</code></th>
			<td><a href="mutation/1687743456/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:34:30</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.2</code></th>
			<td><a href="mutation/1687743270/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:32:42</code></th>
			 <th><code>dependabot/maven/com.github.eirslett-frontend-maven-plugin-1.13.3</code></th>
			<td><a href="mutation/1687743162/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:31:07</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-coverage-2.2.1</code></th>
			<td><a href="mutation/1687743067/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-19T06:49:27</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1687157367/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-19T06:48:59</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.0.1</code></th>
			<td><a href="mutation/1687157339/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-19T06:48:30</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.3</code></th>
			<td><a href="mutation/1687157310/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-19T06:46:00</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1687157160/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:49:19</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.3</code></th>
			<td><a href="mutation/1687139359/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:45:57</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.1</code></th>
			<td><a href="mutation/1687139157/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:37:26</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.0.1</code></th>
			<td><a href="mutation/1687138646/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:28:21</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.0</code></th>
			<td><a href="mutation/1687138101/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-14T15:07:29</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686755249/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-14T14:52:21</code></th>
			 <th><code>changelog_auto</code></th>
			<td><a href="mutation/1686754341/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-14T09:22:51</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686734571/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-14T08:24:20</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="mutation/1686731060/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-13T16:11:02</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="mutation/1686672662/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-06-12T08:14:23</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1686557663/mutation_report/index.html">mutation</a></td>
		</tr>
	</tbody>
</table>
<!-- end:mutation -->

## Angular coverage

Test coverage for the report application.

<!-- start:ng_coverage -->
<table>
	<tbody>
		<tr> <th><code>latest</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/latest/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-26T08:17:20</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1687767440/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-26T08:16:28</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1687767388/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:34:03</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.4</code></th>
			<td><a href="ng_coverage/1687743243/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:32:05</code></th>
			 <th><code>dependabot/github_actions/step-security/harden-runner-2.4.1</code></th>
			<td><a href="ng_coverage/1687743125/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:28:38</code></th>
			 <th><code>dependabot/github_actions/ossf/scorecard-action-2.2.0</code></th>
			<td><a href="ng_coverage/1687742918/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:27:53</code></th>
			 <th><code>dependabot/maven/org.pitest-pitest-maven-1.14.2</code></th>
			<td><a href="ng_coverage/1687742873/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-26T01:27:18</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/karma-coverage-2.2.1</code></th>
			<td><a href="ng_coverage/1687742838/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-19T06:43:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.0.1</code></th>
			<td><a href="ng_coverage/1687157003/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-19T06:40:52</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1687156852/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-19T06:38:01</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1687156681/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:39:37</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/jasmine-4.3.3</code></th>
			<td><a href="ng_coverage/1687138777/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:37:57</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.3.1</code></th>
			<td><a href="ng_coverage/1687138677/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:33:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/jasmine-core-5.0.1</code></th>
			<td><a href="ng_coverage/1687138423/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-19T01:23:17</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-shade-plugin-3.5.0</code></th>
			<td><a href="ng_coverage/1687137797/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-14T15:00:51</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686754851/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-14T14:50:20</code></th>
			 <th><code>changelog_auto</code></th>
			<td><a href="ng_coverage/1686754220/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-14T09:19:44</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686734384/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-14T08:20:12</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="ng_coverage/1686730812/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-13T16:03:45</code></th>
			 <th><code>embed-icons</code></th>
			<td><a href="ng_coverage/1686672225/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-06-12T08:08:18</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1686557298/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->