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
			<td><a href="execution/latest/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/latest/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/latest/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/latest/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/latest/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/latest/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/latest/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:03:50</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1711357430/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711357430/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711357430/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711357430/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711357430/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711357430/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711357430/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:03:30</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1711357410/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711357410/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711357410/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711357410/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711357410/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711357410/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711357410/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:02:56</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1711357376/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711357376/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711357376/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711357376/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711357376/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711357376/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711357376/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:02:33</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1711357353/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711357353/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711357353/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711357353/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711357353/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711357353/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711357353/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-25T01:37:16</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.3</code></th>
			<td><a href="execution/1711330636/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711330636/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711330636/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711330636/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711330636/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711330636/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711330636/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-25T01:33:28</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.30</code></th>
			<td><a href="execution/1711330408/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711330408/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711330408/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711330408/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711330408/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711330408/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711330408/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-25T00:34:29</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.2</code></th>
			<td><a href="execution/1711326869/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711326869/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711326869/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711326869/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711326869/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711326869/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711326869/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-25T00:32:36</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.1</code></th>
			<td><a href="execution/1711326756/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1711326756/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1711326756/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1711326756/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1711326756/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1711326756/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1711326756/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T10:00:12</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710756012/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710756012/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710756012/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710756012/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710756012/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710756012/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710756012/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:46:33</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.17.0</code></th>
			<td><a href="execution/1710755193/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710755193/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710755193/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710755193/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710755193/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710755193/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710755193/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:09:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710752978/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710752978/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710752978/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710752978/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710752978/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710752978/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710752978/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:09:18</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710752958/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710752958/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710752958/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710752958/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710752958/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710752958/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710752958/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:08:43</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710752923/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710752923/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710752923/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710752923/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710752923/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710752923/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710752923/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:22:00</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.2</code></th>
			<td><a href="execution/1710724920/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710724920/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710724920/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710724920/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710724920/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710724920/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710724920/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:20:43</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.2.1</code></th>
			<td><a href="execution/1710724843/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710724843/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710724843/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710724843/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710724843/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710724843/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710724843/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T00:56:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.28</code></th>
			<td><a href="execution/1710723375/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710723375/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710723375/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710723375/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710723375/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710723375/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710723375/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-18T00:47:39</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.0</code></th>
			<td><a href="execution/1710722859/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710722859/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710722859/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710722859/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710722859/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710722859/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710722859/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-17T07:34:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710660857/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710660857/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710660857/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710660857/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710660857/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710660857/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710660857/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-16T23:48:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/follow-redirects-1.15.6</code></th>
			<td><a href="execution/1710632931/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710632931/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710632931/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710632931/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710632931/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710632931/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710632931/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-03-14T15:50:02</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1710431402/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1710431402/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1710431402/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1710431402/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1710431402/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1710431402/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1710431402/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
			 <th><code>main</code></th>
			<td><a href="mutation/latest/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:09:29</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1711357769/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:09:08</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1711357748/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:08:22</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1711357702/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:08:04</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1711357684/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-25T01:42:50</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.3</code></th>
			<td><a href="mutation/1711330970/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-25T01:39:23</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.30</code></th>
			<td><a href="mutation/1711330763/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-25T00:40:37</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.1</code></th>
			<td><a href="mutation/1711327237/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-25T00:40:19</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.2</code></th>
			<td><a href="mutation/1711327219/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T10:05:48</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710756348/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:52:25</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.17.0</code></th>
			<td><a href="mutation/1710755545/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:14:40</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710753280/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:14:19</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710753259/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:13:53</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710753233/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:29:16</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.2</code></th>
			<td><a href="mutation/1710725356/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:27:34</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.2.1</code></th>
			<td><a href="mutation/1710725254/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:02:22</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.28</code></th>
			<td><a href="mutation/1710723742/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-18T00:51:56</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.0</code></th>
			<td><a href="mutation/1710723116/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-17T07:39:46</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710661186/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-16T23:54:53</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/follow-redirects-1.15.6</code></th>
			<td><a href="mutation/1710633293/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-03-14T15:55:40</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1710431740/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2024-03-25T09:03:50</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1711357430/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:03:30</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1711357410/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:02:56</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1711357376/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-25T09:02:33</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1711357353/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-25T01:37:16</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.24.3</code></th>
			<td><a href="ng_coverage/1711330636/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-25T01:33:28</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.30</code></th>
			<td><a href="ng_coverage/1711330408/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-25T00:34:29</code></th>
			 <th><code>dependabot/github_actions/actions/cache-4.0.2</code></th>
			<td><a href="ng_coverage/1711326869/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-25T00:32:36</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.1</code></th>
			<td><a href="ng_coverage/1711326756/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T10:00:12</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710756012/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:46:33</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.17.0</code></th>
			<td><a href="ng_coverage/1710755193/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:09:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710752978/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:09:18</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710752958/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T09:08:43</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710752923/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:22:00</code></th>
			 <th><code>dependabot/github_actions/actions/checkout-4.1.2</code></th>
			<td><a href="ng_coverage/1710724920/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T01:20:43</code></th>
			 <th><code>dependabot/github_actions/actions/setup-java-4.2.1</code></th>
			<td><a href="ng_coverage/1710724843/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T00:56:15</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.11.28</code></th>
			<td><a href="ng_coverage/1710723375/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-18T00:47:39</code></th>
			 <th><code>dependabot/maven/org.apache.maven.plugins-maven-gpg-plugin-3.2.0</code></th>
			<td><a href="ng_coverage/1710722859/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-17T07:34:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710660857/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-16T23:48:51</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/follow-redirects-1.15.6</code></th>
			<td><a href="ng_coverage/1710632931/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-03-14T15:50:02</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1710431402/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->