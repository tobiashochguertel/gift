/*
 * generated by Xtext 2.9.2
 */
package org.xtext.example.mydsl.idea

import com.google.inject.Guice
import org.eclipse.xtext.util.Modules2
import org.xtext.example.mydsl.GiftRuntimeModule
import org.xtext.example.mydsl.GiftStandaloneSetupGenerated

class GiftStandaloneSetupIdea extends GiftStandaloneSetupGenerated {
	override createInjector() {
		val runtimeModule = new GiftRuntimeModule()
		val ideaModule = new GiftIdeaModule()
		val mergedModule = Modules2.mixin(runtimeModule, ideaModule)
		return Guice.createInjector(mergedModule)
	}
}
