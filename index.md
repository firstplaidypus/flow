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
		<tr> <th><code>2024-01-04T11:36:39</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704368199/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704368199/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704368199/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704368199/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704368199/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704368199/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704368199/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-04T11:02:55</code></th>
			 <th><code>hash_mask</code></th>
			<td><a href="execution/1704366175/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704366175/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704366175/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704366175/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704366175/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704366175/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704366175/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:12:07</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704269527/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704269527/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704269527/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704269527/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704269527/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704269527/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704269527/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:11:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704269498/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704269498/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704269498/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704269498/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704269498/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704269498/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704269498/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:06:17</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704269177/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704269177/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704269177/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704269177/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704269177/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704269177/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704269177/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:05:49</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1704269149/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704269149/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704269149/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704269149/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704269149/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704269149/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704269149/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:57:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.6</code></th>
			<td><a href="execution/1704070663/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704070663/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704070663/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704070663/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704070663/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704070663/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704070663/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:57:04</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.7</code></th>
			<td><a href="execution/1704070624/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704070624/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704070624/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704070624/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704070624/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704070624/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704070624/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:35:26</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.10</code></th>
			<td><a href="execution/1704069326/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704069326/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704069326/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704069326/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704069326/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704069326/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704069326/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:33:48</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.6.3</code></th>
			<td><a href="execution/1704069228/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1704069228/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1704069228/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1704069228/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1704069228/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1704069228/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1704069228/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:07:55</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1703491675/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703491675/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703491675/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703491675/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703491675/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703491675/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703491675/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:05:08</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1703491508/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703491508/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703491508/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703491508/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703491508/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703491508/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703491508/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:03:23</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1703491403/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703491403/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703491403/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703491403/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703491403/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703491403/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703491403/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:01:38</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1703491298/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703491298/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703491298/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703491298/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703491298/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703491298/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703491298/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:11:09</code></th>
			 <th><code>dependabot/maven/org.javassist-javassist-3.30.2-GA</code></th>
			<td><a href="execution/1703466669/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703466669/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703466669/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703466669/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703466669/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703466669/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703466669/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:10:42</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.1</code></th>
			<td><a href="execution/1703466642/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703466642/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703466642/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703466642/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703466642/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703466642/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703466642/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:10:14</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-4.0.1</code></th>
			<td><a href="execution/1703466614/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703466614/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703466614/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703466614/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703466614/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703466614/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703466614/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:09:44</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.0</code></th>
			<td><a href="execution/1703466584/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1703466584/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1703466584/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1703466584/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1703466584/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1703466584/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1703466584/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-18T09:25:34</code></th>
			 <th><code>main</code></th>
			<td><a href="execution/1702891534/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702891534/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702891534/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702891534/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702891534/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702891534/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702891534/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:47:08</code></th>
			 <th><code>updowngrade</code></th>
			<td><a href="execution/1702889228/app-core/target/mctf/latest/index.html">app-core</a></td>
			<td><a href="execution/1702889228/app-histogram/target/mctf/latest/index.html">app-histogram</a></td>
			<td><a href="execution/1702889228/app-itest/target/mctf/latest/index.html">app-itest</a></td>
			<td><a href="execution/1702889228/app-queue/target/mctf/latest/index.html">app-queue</a></td>
			<td><a href="execution/1702889228/app-store/target/mctf/latest/index.html">app-store</a></td>
			<td><a href="execution/1702889228/app-ui/target/mctf/latest/index.html">app-ui</a></td>
			<td><a href="execution/1702889228/app-web-ui/target/mctf/latest/index.html">app-web-ui</a></td>
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
		<tr> <th><code>2024-01-04T11:40:22</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704368422/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-04T11:07:03</code></th>
			 <th><code>hash_mask</code></th>
			<td><a href="mutation/1704366423/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:16:16</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704269776/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:15:46</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704269746/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:12:36</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1704269556/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-01T01:03:28</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.6</code></th>
			<td><a href="mutation/1704071008/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-01T01:03:03</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.7</code></th>
			<td><a href="mutation/1704070983/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:40:00</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.6.3</code></th>
			<td><a href="mutation/1704069600/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:39:04</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.10</code></th>
			<td><a href="mutation/1704069544/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:11:03</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1703491863/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:10:18</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1703491818/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:09:14</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1703491754/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:07:26</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1703491646/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T07:56:33</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.1</code></th>
			<td><a href="mutation/1703490993/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:17:02</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-4.0.1</code></th>
			<td><a href="mutation/1703467022/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:14:34</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.0</code></th>
			<td><a href="mutation/1703466874/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:14:07</code></th>
			 <th><code>dependabot/maven/org.javassist-javassist-3.30.2-GA</code></th>
			<td><a href="mutation/1703466847/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T09:31:17</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1702891877/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:50:49</code></th>
			 <th><code>updowngrade</code></th>
			<td><a href="mutation/1702889449/mutation_report/index.html">mutation</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:46:04</code></th>
			 <th><code>main</code></th>
			<td><a href="mutation/1702889164/mutation_report/index.html">mutation</a></td>
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
		<tr> <th><code>2024-01-04T11:36:39</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704368199/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-04T11:02:55</code></th>
			 <th><code>hash_mask</code></th>
			<td><a href="ng_coverage/1704366175/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:12:07</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704269527/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:11:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704269498/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:06:17</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704269177/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-03T08:05:49</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1704269149/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:57:43</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/types/node-20.10.6</code></th>
			<td><a href="ng_coverage/1704070663/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:57:04</code></th>
			 <th><code>dependabot/npm_and_yarn/report/report-ng/babel/core-7.23.7</code></th>
			<td><a href="ng_coverage/1704070624/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:35:26</code></th>
			 <th><code>dependabot/maven/org.slf4j-slf4j-simple-2.0.10</code></th>
			<td><a href="ng_coverage/1704069326/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2024-01-01T00:33:48</code></th>
			 <th><code>dependabot/maven/io.github.bonigarcia-webdrivermanager-5.6.3</code></th>
			<td><a href="ng_coverage/1704069228/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:07:55</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1703491675/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:05:08</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1703491508/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:03:23</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1703491403/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T08:01:38</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1703491298/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:11:09</code></th>
			 <th><code>dependabot/maven/org.javassist-javassist-3.30.2-GA</code></th>
			<td><a href="ng_coverage/1703466669/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:10:42</code></th>
			 <th><code>dependabot/maven/com.fasterxml.jackson.core-jackson-databind-2.16.1</code></th>
			<td><a href="ng_coverage/1703466642/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:10:14</code></th>
			 <th><code>dependabot/github_actions/actions/setup-node-4.0.1</code></th>
			<td><a href="ng_coverage/1703466614/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-25T01:09:44</code></th>
			 <th><code>dependabot/github_actions/actions/download-artifact-4.1.0</code></th>
			<td><a href="ng_coverage/1703466584/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-18T09:25:34</code></th>
			 <th><code>main</code></th>
			<td><a href="ng_coverage/1702891534/report/index.html">ng_coverage</a></td>
		</tr>
		<tr> <th><code>2023-12-18T08:47:08</code></th>
			 <th><code>updowngrade</code></th>
			<td><a href="ng_coverage/1702889228/report/index.html">ng_coverage</a></td>
		</tr>
	</tbody>
</table>
<!-- end:ng_coverage -->