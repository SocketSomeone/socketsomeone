'use client'

import {cn} from "@/utils";
import SectionHeader from "@/components/atoms/SectionHeader";
import LaurelIcon from "@/components/icons/LaurelIcon";
import Projects from "@/components/organisms/Projects/index";
import {useTranslations} from "next-intl";

export function ClientHomeProjects() {
	const t = useTranslations('home.sections');

	return (
		<div
			  id={'projects'}
			  className={cn('flex flex-col justify-center items-center w-full py-20 space-y-6 px-0! xl-wide:px-1 print:hidden')}>
			  <SectionHeader
				  before={
					  <div className="flex flex-row items-center space-x-0 ">
						  <LaurelIcon
							  className="w-8 h-8 -scale-x-100 text-yellow-500"/>
						  <div
							  className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
							  {t('projects.name')}
						  </div>

						  <LaurelIcon className="w-8 h-8 text-yellow-500"/>
					  </div>
				  }
				  title={t('projects.title')}
				  description={t('projects.subtitle')}
			  />
			  <Projects background={true} type="marquee"/>
		</div>
	);
}
